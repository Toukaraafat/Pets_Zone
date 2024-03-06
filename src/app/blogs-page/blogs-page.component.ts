import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogformComponent} from '../blogform/blogform.component';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,BlogCardComponent,BlogformComponent],
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent {

}
