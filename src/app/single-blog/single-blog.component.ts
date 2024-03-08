import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { ShowComponent} from '../show/show.component';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [RouterLink ,BlogCardComponent,RouterLinkActive,ShowComponent],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent {

}
