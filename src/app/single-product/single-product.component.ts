import { Component,Input, OnInit, Output  } from '@angular/core';
import { RouterLink } from '@angular/router';
import{CartService} from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [RouterLink , ProductCardComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {
  images: string[] = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @Input() id?: string;
  products: any;
  product: any;
  // mainImageUrl: string = this.images[0];

  // updateMainImage(imageUrl: string): void {
  //   this.mainImageUrl = imageUrl;
  // }
  // trackByFn(index: number, item: any): number {
  //   return index; // or return item.id; if your items have unique identifiers
  // }
  constructor(private cartService: CartService , private productService: ProductService,     private activatedRoute: ActivatedRoute,
    ) {}

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
  ngOnInit() {
  this.id = this.activatedRoute.snapshot.params['id'];

    this.productService.getProduct(this.id).subscribe((response: any) => {
      this.product = response;  
          console.log(this.product);

    });  
    
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    //   console.log(products);
    // });
  }
  getPro(pro: any) {
    this.product = pro;
  
  }
 
}
