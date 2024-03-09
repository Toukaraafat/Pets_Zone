// comment.service.ts
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  private apiUrl = 'http://127.0.0.1:8000/api/posts';
  constructor(private http: HttpClient) {}

  getComments(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${postId}/comments`);
  }

  addComment(postId: number, content: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/comments`, { content});
  }
 
}

