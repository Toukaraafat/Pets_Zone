import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ClinicsService} from '../services/clinics.service'
@Component({
  selector: 'app-clinics-section',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CarouselModule],
  templateUrl: './clinics-section.component.html',
  styleUrl: './clinics-section.component.css',
})
export class ClinicsSectionComponent {
  customOptions: OwlOptions = {
    items: 3,
    loop: true,
    autoplay: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  clinics: any[] = [];

  constructor (private clinicService: ClinicsService) {}

  ngOnInit(): void {
    this.clinicService.getClinics().subscribe(
      (data: any) => {
        this.clinics = data;  
      },
      (error: any) => {
        console.error('Error fetching animals:', error);
      }
      );
  }
}
