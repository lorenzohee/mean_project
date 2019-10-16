import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { EditorConfig } from '../../shared/editor/model/editor-config';

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
    bannerUrl: ['']
  })
  constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getBlogById()
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
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.blogService.getBlogById(params.get('id'))
      )
    ).subscribe(res => {
      this.blogForm = this.fb.group({
        _id: [''],
        title: ['', Validators.required],
        content: ['', Validators.required],
        blogType: ['', Validators.required],
        blogAccess: ['', Validators.required],
        fileToUpload: [''],
        bannerUrl: ['']
      })
      this.blogForm.patchValue({
        _id: res._id,
        title: res.title,
        content: res.content,
        blogAccess: res.blogAccess,
        blogType: res.blogType,
        bannerUrl: res.bannerUrl
      })
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
