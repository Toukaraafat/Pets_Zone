import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimalsService } from '../services/animals.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-pets-section',
  standalone: true,
  imports: [CarouselModule,PetCardComponent,NgbCarouselModule,NgFor],
  templateUrl: './pets-section.component.html',
  styleUrl: './pets-section.component.css',
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers

})
export class PetsSectionComponent {
  
  customOptions: OwlOptions = {
    items: 4,
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
  }

  animals: any[] = [];
  constructor(private animalService: AnimalsService) {}
  

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(
      (data) => {
        this.animals = data.animals;  
      },
      (error) => {
        console.error('Error fetching animals:', error);
      }
    );
  }


// https://picsum.photos/id/237/200/300
	
}
