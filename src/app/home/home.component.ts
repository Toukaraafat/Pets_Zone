import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { AboutComponent } from '../about/about.component';
import { BlogSectionComponent } from '../blog-section/blog-section.component';
import { RegisterComponent} from '../register/register.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,AboutComponent,BlogSectionComponent,RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
