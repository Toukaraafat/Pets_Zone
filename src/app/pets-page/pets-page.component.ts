import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetCardComponent } from '../pet-card/pet-card.component';

@Component({
  selector: 'app-pets-page',
  standalone: true,
  imports: [RouterLink, PetCardComponent],
  templateUrl: './pets-page.component.html',
  styleUrl: './pets-page.component.css'
})
export class PetsPageComponent {

}
