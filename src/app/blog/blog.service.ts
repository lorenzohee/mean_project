import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private baseService: BaseService) { }

  getBlogList(obj): Observable<Blog[]> {
    let params = new HttpParams().set('page', obj.page)
    if (obj.blogType) {
      params = params.set('blogType', obj.blogType)
    }
    if (obj.tags) {
      params = params.set('tags', obj.tags)
    }
    if (obj.pageNum) {
      params = params.set('pageNum', obj.pageNum)
    }
    if (obj.blogNum) {
      params = params.set('blogNum', obj.blogNum)
    }
    return this.baseService.get({ url: 'api/blogs', params: params })
  }

  getBlogCount(obj): Observable<string> {
    let params = new HttpParams().set('count', 'true')
    if (obj.blogType) {
      params = params.set('blogType', obj.blogType)
    }
    if (obj.tags) {
      params = params.set('tags', obj.tags)
    }
    if (obj.blogNum) {
      params = params.set('blogNum', obj.blogNum)
    }
    return this.baseService.get({ url: 'api/blogs', params: params })
  }

  getBlogById(id: string): Observable<Blog> {
    if (id) {
      return this.baseService.get({ url: `api/blogs/${id}` })
    } else {
      return new Observable();
    }
  }

  createBlog(form: Blog): Observable<Blog> {
    return this.baseService.post({ url: 'api/blogs', form: form })
  }

  updateBlog(form: Blog, id: string): Observable<Blog> {
    return this.baseService.put({ url: `api/blogs/${id}`, form: form })
  }

  deleteBlogById(id: string): Observable<Blog> {
    return this.baseService.delete({ url: `api/blogs/${id}` })
  }

  postBannerFile(fileToUpload: File): Observable<any> {
    return this.baseService.postImageFile(fileToUpload);
  }

  getRelativeBlogs(id: string, tag: string): Observable<Blog[]> {
    let params = new HttpParams().set('id', id)
    params = params.set('tag', tag)
    return this.baseService.get({ url: `api/blogs/getRelativeBlogs`, params })
  }

  tagCloud(): Observable<any> {
    return this.baseService.get({ url: `api/blogs/gettagcloud` })
  }
}
