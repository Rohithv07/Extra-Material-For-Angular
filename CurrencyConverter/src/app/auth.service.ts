import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './auth/user.model';

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string, 
  localId: string,
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=key',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(this.handleError),
    tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=key',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError),
    tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  logout() {
    this.user.next(undefined);
    this.router.navigate(['/auth']);
  }

  // refresh and stays logged in
  autologin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData)
      return;
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
    
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS': 
          errorMessage = 'The email address is already in use by another account.';break;
        case 'OPERATION_NOT_ALLOWED': 
          errorMessage = 'Password sign-in is disabled for this project.'; break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER': 
          errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';break;
        case 'EMAIL_NOT_FOUND': 
          errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';break;
        case 'INVALID_PASSWORD': 
          errorMessage = 'The password is invalid or the user does not have a password.';break;
        case 'USER_DISABLED': 
          errorMessage = 'The user account has been disabled by an administrator.';break;
      }
      return throwError(errorMessage);
    }
  }

  
