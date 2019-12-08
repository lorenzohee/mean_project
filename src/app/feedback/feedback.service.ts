import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { TokenStorage } from '../auth/token.storage';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  tokenVal: string;
  constructor(private httpClient: HttpClient, private tokenService: TokenStorage) {
    this.tokenVal = tokenService.getToken()
  }

  getFeedBack(obj): Observable<Feedback[]> {
    let params = new HttpParams().set('page', obj.get('page') || '1')
    return this.httpClient.get<Feedback[]>(`/api/feedback`, Object.assign({ params }, httpOptions));
  }

  createFeedback(feedback: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(`/api/feedback`, feedback, httpOptions);
  }

  deleteFeedbackById(id: string): Observable<Feedback> {
    if (!this.tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.delete<Feedback>(`/api/feedback/${id}`, httpOptions);
  }
}
