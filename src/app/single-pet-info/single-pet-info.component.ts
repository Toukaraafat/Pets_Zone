import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { AnimalsService } from '../services/animals.service';
import { NgFor, NgIf } from '@angular/common';
import { Animal } from '../interface/animal';


@Component({
  selector: 'app-single-pet-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,PopupComponent,NgFor],
  templateUrl: './single-pet-info.component.html',
  styleUrl: './single-pet-info.component.css'
})
export class SinglePetInfoComponent {
  @Input() id!: number;
  animals:Animal[] = [];
  animal !: Animal;


  constructor(private animalService: AnimalsService, private router: Router) {}


  getFullImagePath(imagePath: string): string {
    return `http://127.0.0.1:8000/${imagePath}`;
}

ngOnChanges() {
  this.animalService.getPetDetails(this.id).subscribe((res: any) => {
    console.log(res);
    if (res && res.animal) { // Adjust to match your actual API response structure
      this.animal = res.animal;
    } else {
      this.router.navigate(['**']);
    }
  });
}
}
