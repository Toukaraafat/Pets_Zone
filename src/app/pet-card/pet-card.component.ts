import { Component ,OnInit,Input} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AnimalsService } from '../services/animals.service';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Animal } from '../interface/animal';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgFor],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  animals: any[] = [];
  @Input() animal!: Animal;

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
