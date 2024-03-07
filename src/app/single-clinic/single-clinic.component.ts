import { Component } from '@angular/core';
import { ClinicsService } from '../services/clinics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-clinic',
  standalone: true,
  imports: [],
  templateUrl: './single-clinic.component.html',
  styleUrl: './single-clinic.component.css'
})
export class SingleClinicComponent {
  clinic: any;
id:string = '';
singleClinic: any = {};
phone_number: any;
clinics: any;
single:any;
name: any;
x: any;
  constructor (private _clinicsService:ClinicsService , private _ActivatedRoute:ActivatedRoute) {
   this.id= _ActivatedRoute.snapshot.params['id'];
   _clinicsService.getSingleClinic(this.id).subscribe(
    (response) => {
      this.singleClinic = response;
    },
    (error) => {
      console.error('Error fetching clinic:', error.message); // Log the error message
    }
  );
  
  }

  // ngOnInit(): void {
  //   this.clinicService.getAClinic(id).subscribe(
  //     (data: any) => {
  //       this.clinic = data;  
  //       console.log(data);
  //       console.log(this.clinic);
  //     },
  //     (error: any) => {
  //       console.error('Error fetching animals:', error);
  //     }
  //   );
  // }
  
}
