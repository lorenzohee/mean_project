import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';
import { TokenStorage } from '../auth/token.storage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  tokenVal: string;
  constructor(private httpClient: HttpClient, private tokenService: TokenStorage) {
    this.tokenVal = tokenService.getToken()
  }

  getComments(obj): Observable<Comment[]> {
    let params = new HttpParams().set('page', obj.get('page') || '1')
    return this.httpClient.get<Comment[]>(`/api/comments`, Object.assign({ params }, httpOptions));
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`/api/comments`, comment, httpOptions);
  }

  getCommentsByArticleId(articleId: string, articleType: string): Observable<Comment[]> {
    let params = new HttpParams().set('parent_id', articleId).set('parent_type', articleType)
    return this.httpClient.get<Comment[]>(`/api/comments`, Object.assign({ params }, httpOptions));
  }

  deleteCommentById(id: string): Observable<Comment> {
    if (!this.tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.delete<Comment>(`/api/comments/${id}`, httpOptions);
  }
}
