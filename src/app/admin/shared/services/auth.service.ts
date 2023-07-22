import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FbAuthResponse, User } from '../../../shared/interfaces';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  // Повече typescript! :))
  // TODO: урок по typescript
  get token(): string | null {
    const expDateString = localStorage.getItem('fb-token-exp');
    const expDate = expDateString ? new Date(expDateString) : null;

    if (expDate && new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  register(user: User): Observable<any> {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
      user
    );
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        user
      )
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    //взимаме message от обекта error и firebase обекта
    const { message } = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        // Променяме съобщението в стрийма
        this.error$.next('Грешен email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Грешна парола');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такъв email не съществува');
        break;
    }

    return throwError(error);
  }




  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(
        new Date().getTime() + Number(response.expiresIn) * 1000
      );
      localStorage.setItem('fb-token', <string>response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
