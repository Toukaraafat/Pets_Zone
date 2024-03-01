import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { AboutComponent } from '../about/about.component';
import { BlogSectionComponent } from '../blog-section/blog-section.component';
import { PetsSectionComponent } from '../pets-section/pets-section.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,AboutComponent,BlogSectionComponent, PetsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
