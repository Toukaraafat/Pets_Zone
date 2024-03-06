import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import{CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private cartService: CartService) {}

  addToCart() {
    const newItem = {
      name: 'Silver Dry Dog Food With Chicken',
      price: 175,
      quantity: 1,
      image: '../../assets/images/product.jpg', // Adjust the image path accordingly
      style: 'your-custom-styles-here', // Add your custom styles here
    };
    this.cartService.addToCart(newItem);
  }
}
