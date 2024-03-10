import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient,private router: Router) {}
  private apiUrl = 'http://127.0.0.1:8000/api/login';

  createUser(email: string, password: string): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.post(endpoint,{ email, password }).pipe(
      catchError((error) => {
        console.error('Error creating user:', error);
        throw error;
      })
    );
  }

 
  canActivate(): Observable<boolean> | boolean {
    return this.isAuthenticated() || this.redirectToLogin();
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  private redirectToLogin(): Observable<boolean> {
    // Redirect to the login page
    this.router.navigate(['/login']);
    return throwError('User not authenticated') as Observable<boolean>;
  } 


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  };

}
