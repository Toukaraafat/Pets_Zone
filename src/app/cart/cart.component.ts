import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { NgIf,NgFor } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,NgIf,NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService) {}
}