import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  
  error:string = "";
registerForm: any;
constructor( private formBuilder: FormBuilder , private _AuthService: AuthService , private _Router:Router){
  this.registerForm = this.formBuilder.group({
    // Your form controls go here
});
}
submitRegisterForm(registerForm:FormGroup)
{
 this._AuthService.register(registerForm.value).subscribe((response)=>{
 if(response.message == 'success'){
//done
this._Router.navigate(['/login']);
 }
 else{
//error
this.error = response.Validator.email.message
 }
})
  
}
  ngOnInit(): void {
   
  }
}

