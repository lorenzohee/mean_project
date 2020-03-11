import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { EditorConfig } from '../../shared/editor/editor-config';
import { CfgService } from '../../cfg/cfg.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  conf = new EditorConfig();

  uploadFile = '';

  blogForm = this.fb.group({
    _id: [''],
    title: ['', Validators.required],
    content: ['', Validators.required],
    blogType: ['', Validators.required],
    blogAccess: ['public', Validators.required],
    tags: [''],
    bannerUrl: [''],
    createdAt: [new Date(), Validators.required]
  })

  validateFlag = false;

  blogTypes: any;
  blogTags: any;
  constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router, private route: ActivatedRoute, private location: Location, private cfgService: CfgService) { }

  ngOnInit() {
    this.getBlogById();
    this.getBlogType();
    this.getBlogTags();
  }

  onSubmit() {
    if (this.blogForm.value._id && this.blogForm.value._id != '') {
      this.blogService.updateBlog(this.blogForm.value, this.blogForm.value._id).subscribe(res => {
        this.validateFlag = true;
        this.router.navigate([`/blogs/${res._id}`]);
      })
    } else {
      delete this.blogForm.value._id
      this.blogService.createBlog(this.blogForm.value).subscribe(res => {
        this.validateFlag = true;
        this.router.navigate([`/blogs/${res._id}`]);
      })
    }
  }

  handleFileInput(files: FileList) {
    this.blogService.postBannerFile(files.item(0)).subscribe(res => {
      if (res.filename) {
        if (confirm('需要替代展示图片吗？')) {
          this.blogForm.patchValue({
            bannerUrl: `/${res.filename}`
          })
        } else {
          let selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value = res.filename;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
          alert(`图片上传地址为：/${res.filename}, 已复制到粘贴板`)
        }
      } else {
        alert('格式不正确或服务器错误，请重试')
      }
    })
  }

  getBlogById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(id).subscribe(res => {
        this.blogForm.patchValue({
          _id: res._id,
          title: res.title,
          content: res.content,
          blogAccess: res.blogAccess,
          blogType: res.blogType,
          tags: res.tags,
          bannerUrl: res.bannerUrl,
          createdAt: res.createdAt
        })
      })
    }
  }

  getBlogType() {
    this.cfgService.getCfgList({ page: 1, key: 'ARTICLE_TYPE' }).subscribe(res => {
      this.blogTypes = JSON.parse(res[0].valu)
    })
  }

  getBlogTags() {
    this.cfgService.getCfgList({ page: 1, key: 'ARTICLE_TAG' }).subscribe(res => {
      this.blogTags = JSON.parse(res[0].valu)
    })
  }

  goback() {
    this.location.back()
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.blogForm.dirty || this.validateFlag) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    const confirmation = window.confirm('您的数据还未保存，是否取消保存?');

    return of(confirmation);
  }

}
