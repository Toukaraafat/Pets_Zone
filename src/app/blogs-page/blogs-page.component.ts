import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [RouterLink,BlogCardComponent],
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent {

}
