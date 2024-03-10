import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { RouterLink ,RouterLinkActive,Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive ,InnerHeaderComponent,FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errors: any = [];

  constructor(private login:LoginService, private router: Router) { }

  onSubmit(myForm: NgForm) {
    const formData = { ...myForm.value };
    console.log(formData);
    this.login.createUser(formData.email, formData.password).subscribe(

      response => {
        console.log('Login successful:', response);
        const loginResponse = response.access_token;

        // Add token to local storage
        localStorage.setItem('token', loginResponse);
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + loginResponse);
        // Navigate or update UI based on response
        this.router.navigate(['/account'], { queryParams: { headers: response } });
      },
      error => {
        this.errors = ['invalid cardenalitas'];
      }

    );

  }

}
