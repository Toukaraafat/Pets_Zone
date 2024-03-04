import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private apiUrl = 'http://127.0.0.1:8000/api/animals';
  constructor(private http: HttpClient) {}

  createAnimal(animalData: any): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.post(endpoint, animalData).pipe(
      catchError((error) => {
        console.error('Error creating animal:', error);
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


