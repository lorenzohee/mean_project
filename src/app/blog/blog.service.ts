import { Injectable, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';
import { TokenStorage } from '../auth/token.storage';
import { BaseService } from '../base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseService {

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(APP_ID) appId: string,
    private httpClient: HttpClient,
    private token: TokenStorage
  ) {
    super(platformId, appId);
    const tokenVal = this.token.getToken();
  }

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
    return this.httpClient.get<Blog[]>(`${this.serviceAdd}api/blogs`, Object.assign({ params }, httpOptions));
  }

  getBlogCount(obj): Observable<string> {
    let params = new HttpParams().set('count', 'true')
    if (obj.blogType) {
      params = params.set('blogType', obj.blogType)
    }
    return this.httpClient.get<string>(`${this.serviceAdd}api/blogs`, Object.assign({ params }, httpOptions));
  }

  getBlogById(id: string): Observable<Blog> {
    if (id) {
      return this.httpClient.get<Blog>(`${this.serviceAdd}api/blogs/${id}`, httpOptions);
    } else {
      return new Observable();
    }
  }

  createBlog(form: Blog): Observable<Blog> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.post<Blog>(`${this.serviceAdd}api/blogs`, form, httpOptions);
  }

  updateBlog(form: Blog, id: string): Observable<Blog> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.put<Blog>(`${this.serviceAdd}api/blogs/${id}`, form, httpOptions);
  }

  deleteBlogById(id: string): Observable<Blog> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.delete<Blog>(`${this.serviceAdd}api/blogs/${id}`, httpOptions);
  }

  postBannerFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('blogBanner', fileToUpload, fileToUpload.name);
    return this.httpClient.post<any>(`${this.serviceAdd}api/blogs/upload`, formData);
  }
}
