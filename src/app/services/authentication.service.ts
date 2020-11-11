import { Injectable } from '@angular/core';

import { Observable, from, ReplaySubject } from 'rxjs';
import { User } from '../models/user.model';
import { distinctUntilChanged, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: ReplaySubject<User> = new ReplaySubject(1);
  get user(): Observable<User> {
    return this._user.pipe(distinctUntilChanged());
  }

  constructor() {
  }

  public login(email: string, password: string) {

  }

  public register(email: string, password: string) {
  }

  public logout() {
  }

  isLoggedIn() {
    return null;
  }
}
