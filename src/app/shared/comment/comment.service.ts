import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { TokenStorage } from '../../auth/token.storage';
import { Observable } from 'rxjs';
import { Comment } from './comment';

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

  createComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`/api/comments`, comment, httpOptions);
  }

  getCommentsByArticleId(articleId: string, articleType: string): Observable<Comment[]> {
    let params = new HttpParams().set('parent_id', articleId).set('parent_type', articleType)
    return this.httpClient.get<Comment[]>(`/api/comments`, Object.assign({ params }, httpOptions));
  }
}
