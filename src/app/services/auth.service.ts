import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class AuthService {
  username: any;
  loggedIn = new BehaviorSubject(false);
  validUsers = [
    { emailId: "abc@media.com", password: "abc123" },
    { emailId: "def@media.com", password: "adef123" },
  ]

  constructor() {
    let username = localStorage.getItem('username');
    if (username) {
      this.username = username;
      this.logIn(this.username)
    } else {
      this.logout;
    }

  }

  logIn(username) {
    localStorage.setItem('username', username)
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('username');
    this.loggedIn.next(false);
  }

  checkCredentials(userCreds): Observable<any> {
    if (this.validUsers.some((x) => {
      if (x.emailId === userCreds.emailId && x.password === userCreds.password) {
        return true
      } else {
        return false
      }
    })
    ) {
      return of(true).pipe(
        map(x => { return x })
      )
    } else {
      return of(false).pipe(
        map(x => { return x })
      )
    }
  }
}
