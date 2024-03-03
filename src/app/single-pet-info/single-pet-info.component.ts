import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-single-pet-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,PopupComponent],
  templateUrl: './single-pet-info.component.html',
  styleUrl: './single-pet-info.component.css'
})
export class SinglePetInfoComponent {

}
