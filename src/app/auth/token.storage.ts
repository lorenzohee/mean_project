import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

  constructor() { }

  signOut() {
    this.validLocalStorage().removeItem(TOKEN_KEY);
    this.validLocalStorage().clear();
  }

  public saveToken(token: string) {
    if (!token) return;
    this.validLocalStorage().removeItem(TOKEN_KEY);
    this.validLocalStorage().setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return this.validLocalStorage().getItem(TOKEN_KEY);
  }

  public saveStorage(key: string, val: string) {
    if (!key) return;
    this.validLocalStorage().setItem(key, val);
  }

  public getStorage(key: string) {
    if (!key) return;
    return this.validLocalStorage().getItem(key)
  }

  public validLocalStorage() {
    if (typeof window !== 'undefined') {
      return window.localStorage
    } else {
      return { getItem(key) { return null }, removeItem(str) { }, clear() { }, setItem(key, val) { }, }
    }
  }
}