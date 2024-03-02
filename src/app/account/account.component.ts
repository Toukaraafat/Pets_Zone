import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogSectionComponent } from "../blog-section/blog-section.component";
import { PetsSectionComponent } from "../pets-section/pets-section.component";
import { PetCardComponent} from "../pet-card/pet-card.component";
@Component({
    selector: 'app-account',
    standalone: true,
    templateUrl: './account.component.html',
    styleUrl: './account.component.css',
    imports: [RouterLink, RouterLinkActive, BlogCardComponent, BlogSectionComponent ,
      PetsSectionComponent,PetCardComponent,CarouselModule]
})
export class AccountComponent {
customOptions: OwlOptions = {
  loop: true,
  autoplay: true,
  dots: true,
  margin: 30,
  autoHeight: true,
  autoWidth: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 3500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    }
  }

}}
