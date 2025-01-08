import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private authSubject: BehaviorSubject<boolean>;
  constructor() {
    this.authSubject = new BehaviorSubject<boolean>(false);
  }

  login() {
    localStorage.setItem('token', 'eldab3eldab3');
    this.authSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.authSubject.next(false);
  }

  getUserLogged(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token') ? true : false;
    }
    return false;
  }

  getAuthSubject(): BehaviorSubject<boolean> {
    return this.authSubject;
  }
}
