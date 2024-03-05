import { Component } from '@angular/core';
import { AboutPopUpComponent} from '../about-pop-up/about-pop-up.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutPopUpComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
