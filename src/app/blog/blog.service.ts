import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';
import { TokenStorage } from '../auth/token.storage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private httpClient: HttpClient,
    private token: TokenStorage
  ) {
    const tokenVal = this.token.getToken();
  }

  getBlogList(obj): Observable<Blog[]> {
    let params = new HttpParams().set('page', obj.get('page') || '1').set('blogType', obj.get('blogType'))
    return this.httpClient.get<Blog[]>(`/api/blogs`, Object.assign({ params }, httpOptions));
  }

  getBlogCount(obj): Observable<string> {
    let params = new HttpParams().set('count', 'true').set('blogType', obj.get('blogType'))
    return this.httpClient.get<string>(`/api/blogs`, Object.assign({ params }, httpOptions));
  }

  getBlogById(id: string): Observable<Blog> {
    if (id) {
      return this.httpClient.get<Blog>(`/api/blogs/${id}`, httpOptions);
    } else {
      return new Observable();
    }
  }

  createBlog(form: Blog): Observable<Blog> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.post<Blog>(`/api/blogs`, form, httpOptions);
  }

  updateBlog(form: Blog, id: string): Observable<Blog> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.put<Blog>(`/api/blogs/${id}`, form, httpOptions);
  }

  deleteBlogById(id: string): Observable<Blog> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.delete<Blog>(`/api/blogs/${id}`, httpOptions);
  }

  postBannerFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('blogBanner', fileToUpload, fileToUpload.name);
    return this.httpClient.post<any>(`/api/blogs/upload`, formData);
  }
}
