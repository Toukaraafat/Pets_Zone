import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';
import { FormsModule } from '@angular/forms';
import { AnimalsService } from '../services/animals.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [RouterLink ,InnerHeaderComponent,FormsModule,NgIf],
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css'
})
export class PetFormComponent {

  selectedFile: File | null = null;
  formData: any = {}; 
  successMessage: string | undefined;
  
  constructor(private animalService: AnimalsService,private router: Router,private auth:LoginService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      console.error('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('age', this.formData.age);
    formData.append('animel_type', this.formData.animel_type);
    formData.append('gender', this.formData.gender);
    formData.append('location', this.formData.location);
    formData.append('disc', this.formData.disc);
    formData.append('image', this.selectedFile, this.selectedFile.name);

    this.animalService.createAnimal(formData).subscribe(
      (response) => {
        console.log('Animal created successfully:', response);
        this.router.navigate(['/pets']);
        // this.successMessage = 'Animal created successfully';
        this.resetForm();
      },
      (error) => {
        // Handle error
        console.error('Error creating animal:', error);
            if (error.error && error.error.errors && error.error.errors.image) {
          console.error('Image upload error:', error.error.errors.image[0]);
        } else {
          console.error('Generic error. Check server logs for more details.');
        }
      }
    
    );
  }

  resetForm() {
    this.formData = {
      name: '',
      age: 0,
      animel_type: '',
      gender: '',
      location: '',
      disc: '',
      image: null,
    };
    this.selectedFile = null;
  }

  isLoggedIn(){
    return this.auth.canActivate;
  }

}
