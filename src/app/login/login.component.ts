import { Component } from '@angular/core';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive ,InnerHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
