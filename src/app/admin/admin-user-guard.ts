import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { TokenStorage } from '../auth/token.storage';

@Injectable()
export class OnlyAdminUsersGuard implements CanActivate {

  storage: TokenStorage;
  constructor() {
    this.storage = new TokenStorage();
  }

  canActivate() {
    const user = JSON.parse(this.storage.getStorage('user'))
    return user && user.is_admin;
  }
}
