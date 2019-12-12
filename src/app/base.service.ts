import { Inject, PLATFORM_ID, APP_ID } from "@angular/core";

import { isPlatformBrowser } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export abstract class BaseService {
  serviceAdd: string = '/';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    if (isPlatformBrowser(platformId)) {
      this.serviceAdd = '/'
    } else {
      this.serviceAdd = 'https://yongqinghee.cf/'
    }
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
