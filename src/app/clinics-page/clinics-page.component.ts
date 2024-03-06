import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClinicsService } from '../services/clinics.service';


@Component({
  selector: 'app-clinics-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clinics-page.component.html',
  styleUrl: './clinics-page.component.css'
})
export class ClinicsPageComponent {
  clinics: any[] = [];

  constructor (private clinicService: ClinicsService) {}

  ngOnInit(): void {
    this.clinicService.getClinics().subscribe(
      (data: any) => {
        this.clinics = data;  
      },
      (error: any) => {
        console.error('Error fetching animals:', error);
      }
      );
  }
  
  // for(const clinic:any of this.clinics){
  //   console.log(clinic);
  // }

}
