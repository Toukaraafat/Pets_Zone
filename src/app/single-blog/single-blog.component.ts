import { Component, Input } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { Post } from '../interface/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [RouterLink ,BlogCardComponent],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent {

  @Input() id!: number;
  posts:Post[] = [];
  post !: Post;


  constructor(private postService: PostsService, private router: Router) {}


  getFullImagePath(imagePath: string): string {
    return `http://127.0.0.1:8000/${imagePath}`;
}

// ngOnChanges() {
//   this.postService.getPetpost(this.id).subscribe((res: any) => {
//     console.log(res);
//     if (res && res.post) { 
//       this.post = res.post;
//     } else {
//       this.router.navigate(['**']);
//     }
//   });
// }

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
}


}
