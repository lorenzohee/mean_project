import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cfg } from './cfg';
import { TokenStorage } from '../auth/token.storage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CfgService {

  constructor(
    private httpClient: HttpClient,
    private token: TokenStorage
  ) {
    const tokenVal = this.token.getToken();
  }


  getCfgList(obj): Observable<Cfg[]> {
    let params = new HttpParams().set('page', obj.page || '1')
    if (obj.key) {
      params = params.set('key', obj.key)
    }
    return this.httpClient.get<Cfg[]>(`/api/cfgs`, Object.assign({ params }, httpOptions));
  }

  getCfgCount(obj): Observable<string> {
    let params = new HttpParams().set('count', 'true')
    return this.httpClient.get<string>(`/api/cfgs`, Object.assign({ params }, httpOptions));
  }

  getCfgById(id: string): Observable<Cfg> {
    if (id) {
      return this.httpClient.get<Cfg>(`/api/cfgs/${id}`, httpOptions);
    } else {
      return new Observable();
    }
  }

  createCfg(form: Cfg): Observable<Cfg> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.post<Cfg>(`/api/cfgs`, form, httpOptions);
  }

  updateCfg(form: Cfg, id: string): Observable<Cfg> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.put<Cfg>(`/api/cfgs/${id}`, form, httpOptions);
  }

  deleteCfgById(id: string): Observable<Cfg> {
    const tokenVal = this.token.getToken();
    if (!tokenVal) return Observable.create(observer => { observer.complete(); })
    return this.httpClient.delete<Cfg>(`/api/cfgs/${id}`, httpOptions);
  }
}
