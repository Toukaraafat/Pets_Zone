import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}
  
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      catchError((error) => {
        console.error('Error creating animal:', error);
        throw error;
      })
    );
  }
}
