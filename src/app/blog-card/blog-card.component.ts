import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Post } from '../interface/post';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink,NgFor,NgIf],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {

  @Input() post!: Post;
  
  constructor(
    private router: Router,
  
  ) {}
  getFullImagePath(imagePath: string): string {
    console.log(this.post)
    return `http://127.0.0.1:8000/${imagePath}`;
}

redirectToDetails(id: number) {
  console.log('Button clicked. Redirecting to details with id:', id);
  this.router.navigate(['/blog', id]);
}

}
