import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { PostsService } from '../services/posts.service';
import { CommentService } from '../services/comment.service';
import { Post } from '../interface/post';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [RouterLink ,BlogCardComponent,RouterLinkActive],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent {

  @Input() id!: number;
  posts:Post[] = [];
  post !: Post;
  comments: any[] = [];
  newComment: string = '';

  constructor(private postService: PostsService, private router: Router, private commentService: CommentService, private route: ActivatedRoute) {}


  getFullImagePath(imagePath: string): string {
    return `http://127.0.0.1:8000/${imagePath}`;
}



ngOnInit() {
  console.log('Current ID:', this.id);
  this.postService.getPetpost(this.id).subscribe((res: any) => {
    console.log(res);
    if (res && res.post) { 
      this.post = res.post;
    } else {
      this.router.navigate(['**']);
    }
  });

  this.route.params.subscribe((params) => {
    this.id = +params['id'];
    this.loadComments();
  });
}


loadComments(): void {
  if (this.id !== 0) {
    this.commentService.getComments(this.id).subscribe((response) => {
      this.comments = response.comments;
    });
  }
}

addComment(): void {
  if (this.newComment.trim() !== '') {
    this.commentService.addComment(this.id, this.newComment).subscribe(() => {
      this.newComment = '';
      this.loadComments();
    });
  }
}

}
