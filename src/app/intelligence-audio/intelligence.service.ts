import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IntelligenceService {

  constructor(private httpClient: HttpClient) {
  }

  postText(form): Observable<String> {
    return this.httpClient.post<String>(`/api/intelligence/text-to-speach`, form, httpOptions);
  }
}
