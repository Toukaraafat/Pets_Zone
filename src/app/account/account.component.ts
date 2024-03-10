import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { PetCardComponent} from "../pet-card/pet-card.component";
import { AnimalsService } from '../services/animals.service';
import { NgFor, NgIf } from '@angular/common';
import { PostsService } from '../services/posts.service';
@Component({
    selector: 'app-account',
    standalone: true,
    templateUrl: './account.component.html',
    styleUrl: './account.component.css',
    imports: [RouterLink, RouterLinkActive, BlogCardComponent,PetCardComponent,CarouselModule,NgFor]
})
export class AccountComponent {
customOptions: OwlOptions = {
  loop: true,
  autoplay: true,
  dots: true,
  margin: 30,
  autoHeight: true,
  autoWidth: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 3500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    }
  }

}


animals: any[] = [];
posts: any[] = [];
  user: any;

constructor(private animalService: AnimalsService,private postService: PostsService) {}


ngOnInit(): void {
  this.animalService.getuserAnimals().subscribe(
    (data) => {
      this.animals = data.animals;  
    },
    (error) => {
      console.error('Error fetching animals:', error);
    }
  );

  this.postService.getuserPosts().subscribe(
    (data) => {
      this.posts = data.posts;
      console.log('Received data:', this.posts);

    },
    (error) => {
      console.error('Error getting posts:', error);
    }
  );


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
