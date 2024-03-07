import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartCounter: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.counter$.subscribe((counter) => {
      this.cartCounter = counter;
    });
  }
}
