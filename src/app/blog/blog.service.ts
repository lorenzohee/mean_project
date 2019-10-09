import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getBlogList(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(`/api/blogs`, httpOptions);
  }

  getBlogById(id: string): Observable<Blog> {
    return this.httpClient.get<Blog>(`/api/blogs/${id}`, httpOptions);
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
