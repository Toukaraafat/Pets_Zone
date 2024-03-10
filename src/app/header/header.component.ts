import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartCounter: number = 0;

  constructor(private cartService: CartService,public auth:LoginService,private router: Router) {}

  ngOnInit() {

    this.cartService.counter$.subscribe((counter) => {
      this.cartCounter = counter;
    });
  }

  add():void{
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/pet-form']);

    }else{
      this.router.navigate(['/login']);

    }
  }

  logout(): void {
    this.auth.logout(); // Assuming you have a logout method in AuthService
  }
 
}
