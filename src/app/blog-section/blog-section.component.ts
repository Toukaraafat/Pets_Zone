import { Component } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { PostsService } from '../services/posts.service';
import { NgFor, NgIf } from '@angular/common';
import { Post } from '../interface/post';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [BlogCardComponent,NgFor,NgIf],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.css'
})
export class BlogSectionComponent {
  posts: Post[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data.posts;
      },
      (error) => {
        console.error('Error getting posts:', error);
      }
    );
  }
}
