import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inner-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inner-header.component.html',
  styleUrl: './inner-header.component.css'
})
export class InnerHeaderComponent {

}
