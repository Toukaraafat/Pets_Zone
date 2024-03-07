import { Component } from '@angular/core';
import { ClinicsService } from '../services/clinics.service';


@Component({
  selector: 'app-single-clinic',
  standalone: true,
  imports: [],
  templateUrl: './single-clinic.component.html',
  styleUrl: './single-clinic.component.css'
})
export class SingleClinicComponent {
  clinic: any;

  constructor (private clinicService: ClinicsService) {}

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
