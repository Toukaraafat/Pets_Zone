import { Component } from '@angular/core';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';
import { BlogCardComponent} from '../blog-card/blog-card.component';
import { RouterLink ,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-blogform',
  standalone: true,
  imports: [InnerHeaderComponent,RouterLink ,BlogCardComponent,RouterLinkActive],
  templateUrl: './blogform.component.html',
  styleUrl: './blogform.component.css'
})
export class BlogformComponent {

}
