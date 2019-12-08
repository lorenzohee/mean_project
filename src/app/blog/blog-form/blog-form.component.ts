import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { EditorConfig } from '../../shared/editor/model/editor-config';
import { CfgService } from '../../cfg/cfg.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  conf = new EditorConfig();

  blogForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    blogType: ['', Validators.required],
    fileToUpload: ['', Validators.required],
    blogAccess: ['', Validators.required],
    tags: [''],
    bannerUrl: ['']
  })

  blogTypes: any;
  blogTags: any;
  constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router, private route: ActivatedRoute, private location: Location, private cfgService: CfgService) { }

  ngOnInit() {
    this.getBlogById();
    this.getBlogType();
    this.getBlogTags();
  }

  onSubmit() {
    delete this.blogForm.value.fileToUpload
    if (this.blogForm.value._id) {
      this.blogService.updateBlog(this.blogForm.value, this.blogForm.value._id).subscribe(res => {
        this.router.navigate([`/blogs/${res._id}`]);
      })
    } else {
      this.blogService.createBlog(this.blogForm.value).subscribe(res => {
        this.router.navigate([`/blogs/${res._id}`]);
      })
    }
  }

  handleFileInput(files: FileList) {
    this.blogService.postBannerFile(files.item(0)).subscribe(res => {
      this.blogForm.patchValue({ bannerUrl: res.filename })
    })
  }

  getBlogById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(id).subscribe(res => {
        this.blogForm = this.fb.group({
          _id: [''],
          title: ['', Validators.required],
          content: ['', Validators.required],
          blogType: ['', Validators.required],
          blogAccess: ['', Validators.required],
          fileToUpload: [''],
          tags: [''],
          bannerUrl: ['']
        })
        this.blogForm.patchValue({
          _id: res._id,
          title: res.title,
          content: res.content,
          blogAccess: res.blogAccess,
          blogType: res.blogType,
          tags: res.tags,
          bannerUrl: res.bannerUrl
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

  //同步markdown语句
  syncEditor(str: string): void {
    this.blogForm.patchValue({
      content: str
    })
  }
}
