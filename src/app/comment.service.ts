// comment.service.ts
import { Injectable } from '@angular/core';
import { Comment } from './comment.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments: Comment[] = [];

  getComments(): Comment[] {
    return this.comments;
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }
}
export { Comment };

