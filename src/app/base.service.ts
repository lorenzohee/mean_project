import { Inject, PLATFORM_ID, APP_ID, Injectable, ErrorHandler, Injector, NgZone } from "@angular/core";

import { isPlatformBrowser } from "@angular/common";
import { HttpErrorResponse, HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BaseService implements ErrorHandler {
  serviceAdd: string = '/';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private httpClient: HttpClient,
    private injector: Injector,
    public snackBar: MatSnackBar,
    private readonly zone: NgZone) {
    // ssr need this full path
    // if (isPlatformBrowser(platformId)) {
    //   this.serviceAdd = '/'
    // } else {
    //   this.serviceAdd = 'https://innovationroad.site/'
    // }
  }

  private getRequestOptions(params?): any {
    let headers = new HttpHeaders()

    headers.append('X-Requested-With', 'XMLHttpRequest')
    headers.append('Content-Type', 'application/json; charset=UTF-8')
    headers.append('Accept', 'application/json')

    let requestHeaders = { headers: headers, withCredentials: true }
    if (params) {
      requestHeaders = Object.assign({ params }, requestHeaders)
    }

    return requestHeaders
  }

  /**
   * get请求
   * @param obj
   * @returns Observable
   */
  get(obj): Observable<any> {
    let options = this.getRequestOptions(obj.params)
    return this.httpClient.get<any>(`${this.serviceAdd}${obj.url}`, options).pipe(retry(3), catchError(error => this.handleError(error)));
  }


  /**
   * post请求
   * @param url
   * @param body
   * @returns {Promise<T>|Promise<TResult|T>|Observable<R>|Promise<R>|any}
   */
  post(obj): Observable<any> {
    let options = this.getRequestOptions()
    return this.httpClient.post<any>(`${this.serviceAdd}${obj.url}`, obj.form, options).pipe(catchError(error => this.handleError(error)));
  }

  /**
   * delete请求
   * @param url
   * @param ids
   * @returns {Promise<*|{}>|Promise<T>|Promise<*|{}|T>|any<T>|Promise<R>|any}
   */
  delete(obj): Observable<any> {
    let options = this.getRequestOptions()
    return this.httpClient.delete<any>(`${this.serviceAdd}${obj.url}`, options).pipe(catchError(error => this.handleError(error)));
  }

  /**
   * put请求
   * @param url
   * @param body
   * @returns {Promise<T>|Promise<TResult|T>|Observable<R>|Promise<R>|any}
   */
  put(obj): Observable<any> {
    let options = this.getRequestOptions()
    return this.httpClient.put<any>(`${this.serviceAdd}${obj.url}`, obj.form, options).pipe(catchError(error => this.handleError(error)));
  }

  postImageFile(fileToUpload) {
    const formData: FormData = new FormData();
    formData.append('blogBanner', fileToUpload, fileToUpload.name);
    return this.httpClient.post<any>(`${this.serviceAdd}api/blogs/upload`, formData).pipe(catchError(error => this.handleError(error)));
  }

  public handleError(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.zone.run(() => {
        const snackBar = this.snackBar.open(error.message, 'OK', {
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          duration: 3000,
        });
        snackBar.onAction().subscribe(() => {
          snackBar.dismiss();
        })
      });
    }

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
