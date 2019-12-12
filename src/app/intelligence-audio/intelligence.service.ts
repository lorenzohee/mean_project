import { Injectable, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IntelligenceService extends BaseService {

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(APP_ID) appId: string, private httpClient: HttpClient) {
    super(platformId, appId);
  }

  postText(form): Observable<String> {
    return this.httpClient.post<String>(`/api/intelligence/text-to-speach`, form, httpOptions);
  }
}
