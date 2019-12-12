import { Injectable, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { TokenStorage } from '../auth/token.storage';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';
import { BaseService } from '../base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends BaseService {
  tokenVal: string;
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(APP_ID) appId: string, private httpClient: HttpClient, private tokenService: TokenStorage) {
    super(platformId, appId);
    this.tokenVal = tokenService.getToken()
  }

  getFeedBack(obj): Observable<Feedback[]> {
    let params = new HttpParams().set('page', obj.get('page') || '1')
    return this.httpClient.get<Feedback[]>(`${this.serviceAdd}api/feedback`, Object.assign({ params }, httpOptions));
  }

  createFeedback(feedback: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(`${this.serviceAdd}api/feedback`, feedback, httpOptions);
  }

  deleteFeedbackById(id: string): Observable<Feedback> {
    if (!this.tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.delete<Feedback>(`${this.serviceAdd}api/feedback/${id}`, httpOptions);
  }
}
