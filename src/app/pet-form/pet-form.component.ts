import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [RouterLink ,InnerHeaderComponent],
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css'
})
export class PetFormComponent {

}
