import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop-section',
  standalone: true,
  imports: [CarouselModule, ProductCardComponent],
  templateUrl: './shop-section.component.html',
  styleUrl: './shop-section.component.css'
})
export class ShopSectionComponent {
  constructor(private productService: ProductService) {}

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
  products: any;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
