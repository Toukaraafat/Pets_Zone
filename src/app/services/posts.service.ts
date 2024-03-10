import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'http://127.0.0.1:8000/api/posts';
  constructor(private http: HttpClient) {}

  createPost(post: any): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.post(endpoint, post).pipe(
      catchError((error) => {
        console.error('Error creating post:', error);
        throw error;
      })
    );
  }

  getPosts(): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.get(endpoint).pipe(
      catchError((error) => {
        console.error('Error getting posts:', error);
        throw error;
      })
    );
  }

  getuserPosts(): Observable<any> {
    const endpoint = `${this.apiUrl}/user`;
    return this.http.get(endpoint).pipe(
      catchError((error) => {
        console.error('Error getting posts:', error);
        throw error;
      })
    );
  }

  getPetpost(id: number): Observable<any> {
    const endpoint = `${this.apiUrl}/${id}`;
    return this.http.get(endpoint).pipe(
      catchError((error) => {
        console.error('Error post:', error);
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
  };}
