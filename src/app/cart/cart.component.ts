import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
import { NgIf,NgFor } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgIf,NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService , private snackBar: MatSnackBar ,private router: Router) {this.updateCartCounter();}
  cartCounter: number = 0;


  updateCartCounter() {
    // Calculate the total quantity of items in the cart
    let totalCount = this.cartService.cartItems.reduce((total, item) => total + item.quantity, 0);
    // Update the cartCounter variable
    this.cartCounter = totalCount;
  }

  // Update the cartCounter when the cart items change
  onCartChange() {
    this.updateCartCounter();
  }

  checkout() {
    // Assuming you have a method to place an order in your cart service
    // This is a basic example; you may need to implement a more complex logic
    this.cartService.placeOrder();

    // Optional: You can display a success message or navigate to a thank you page
    // For example, using Angular Router
    this.router.navigate(['/thank-you']);
  }
 

  showPopup(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['custom-snackbar'],
      
    });
  }
}
