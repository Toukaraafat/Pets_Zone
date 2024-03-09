import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [RouterLink ,BlogCardComponent,RouterLinkActive,ShowComponent],
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
