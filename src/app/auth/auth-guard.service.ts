import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { TokenStorage } from './token.storage';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  storage: TokenStorage;
  constructor(public router: Router) {
    this.storage = new TokenStorage();
  }

  canActivate() {
    const user = (<any>window).user || JSON.parse(this.storage.getStorage('user'));
    if (user) return true;

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login']);
    return false;
  }

  canLoad() {
    return this.canActivate();
  }
}
