import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
 
}
