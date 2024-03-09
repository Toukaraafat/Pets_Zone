import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegistrationComponent  implements OnInit{
 

  registerForm!: FormGroup 

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      street: ['', [Validators.required]],
      area: ['', [Validators.required]],
      building_number: [''],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      city: ['Giza', [Validators.required]],
      image: [null]
    });
  }

  submitRegisterForm(): void {
    if (this.registerForm.valid) {
      const formData = new FormData();
      for (const key of Object.keys(this.registerForm.value)) {
        formData.append(key, this.registerForm.value[key]);
      }

      this.authService.register(formData).subscribe(
        (response) => {
          console.log(response); // Handle success response from your API
        },
        (error) => {
          console.error(error); // Handle error response from your API
        }
      );
    } else {
      // Form is invalid, handle accordingly (show validation errors, etc.)
    }
  }

}