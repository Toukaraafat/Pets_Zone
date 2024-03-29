import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogformComponent} from '../blogform/blogform.component';
import { PostsService } from '../services/posts.service';
import { Post } from '../interface/post';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,BlogCardComponent,BlogformComponent,NgFor],
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent {

  posts: Post[] = [];

  constructor(private postService: PostsService,public auth:LoginService,private router: Router) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data.posts;
        console.log('Received data:', this.posts);

      },
      (error) => {
        console.error('Error getting posts:', error);
      }
    );
  }
  add():void{
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/blogform']);

    }else{
      this.router.navigate(['/login']);

    }
  }
}
