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
}
