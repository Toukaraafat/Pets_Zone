import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private apiUrl = 'http://127.0.0.1:8000/api/animals';
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    // Check if the token exists before setting the header
    if (token) {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }

    // If the token is not present, return headers without Authorization
    return new HttpHeaders();
}

createAnimal(animalData: any): Observable<any> {
  const endpoint = `${this.apiUrl}`;
  return this.http.post(endpoint, animalData, { headers: this.getHeaders() }).pipe(
      catchError((error) => {
          if (error.status === 401) {
              // Handle unauthorized access, e.g., redirect to login
              console.error('Unauthorized access. Redirecting to login.');
              // Perform redirection or other action
          } else {
              console.error('Error creating animal:', error);
          }
          throw error;
      })
  );
}

getUser(): Observable<any> {
  const endpoint = `http://127.0.0.1:8000/api/user`;
  return this.http.get(endpoint,{ headers: this.getHeaders() }).pipe(
    catchError((error) => {
      console.error('Error creating user:', error);
      throw error;
    })
  );
}

  getAnimals(): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.get(endpoint).pipe(
      catchError((error) => {
        console.error('Error creating animal:', error);
        throw error;
      })
    );
  }

  getuserAnimals(): Observable<any> {
    const endpoint = `${this.apiUrl}/user`;
    return this.http.get(endpoint,{ headers: this.getHeaders() }).pipe(
      catchError((error) => {
        console.error('Error creating animal:', error);
        throw error;
      })
    );
  }
  getPetDetails(id: number): Observable<any> {
    const endpoint = `${this.apiUrl}/new/${id}`;
    return this.http.get(endpoint,{ headers: this.getHeaders() }).pipe(
      catchError((error) => {
        console.error('Error animal:', error);
        throw error;
      })
    );
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


