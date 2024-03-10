import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 import {catchError, throwError } from 'rxjs';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class  RegisterComponent {
  errors: any = [];

  constructor(private http: HttpClient, private router: Router) {}
  
  onSubmit(myForm: NgForm) {
  
    const formData = { ...myForm.value };
    console.log(formData);
    this.http.post('http://127.0.0.1:8000/api/register', formData)
      .subscribe(
        (response: any) => {
          console.log('Signup successful:', response);
          this.router.navigate(['/login'])
        },
        catchError((error) => {
          console.error('Error creating user:', error);
          throw error;
        })
       
      );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  };


}