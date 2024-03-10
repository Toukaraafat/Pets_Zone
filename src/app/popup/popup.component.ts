import { Component,OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  user: any;

  constructor(private animalService: AnimalsService){}

  ngOnInit(): void {

    this.animalService.getUser().subscribe(
      (data) => {
        console.log(data);
        this.user = data;
      },
      (error) => {
        console.error('Error loading user data:', error);
      }
    );

  }
}



