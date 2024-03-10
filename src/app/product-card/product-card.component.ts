import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RouterLink } from '@angular/router';
import{CartService} from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { ShopSectionComponent } from '../shop-section/shop-section.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, ShopSectionComponent ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  constructor(private cartService: CartService ,private productService: ProductService) {}

  // addToCart() {
  //   const newItem = {
  //     name: 'Silver Dry Dog Food With Chicken',
  //     price: 175,
  //     quantity: 1,
  //     image: '../../assets/images/product.jpg', // Adjust the image path accordingly
  //     style: 'your-custom-styles-here', // Add your custom styles here
  //   };
  //   this.cartService.addToCart(newItem);
  // }  
  addToCart() {
    const newItem = {
      product_id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1,
      image: this.product.image, // Adjust the image path accordingly
      style: 'your-custom-styles-here', // Add your custom styles here
    };
    this.cartService.addToCart(newItem);
  }  
  products: any;

  @Output() emitProduct: EventEmitter<any> = new EventEmitter();

  @Input() product:any;
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
  sendPro() {
    this.emitProduct.emit(this.product);
  }
}
