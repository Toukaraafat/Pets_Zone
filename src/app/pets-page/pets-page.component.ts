import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { AnimalsService } from '../services/animals.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pets-page',
  standalone: true,
  imports: [RouterLink, PetCardComponent,NgFor],
  templateUrl: './pets-page.component.html',
  styleUrl: './pets-page.component.css'
})
export class PetsPageComponent {

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

}
