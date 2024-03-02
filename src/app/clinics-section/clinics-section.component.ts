import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-clinics-section',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './clinics-section.component.html',
  styleUrl: './clinics-section.component.css'
})
export class ClinicsSectionComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  }


}
