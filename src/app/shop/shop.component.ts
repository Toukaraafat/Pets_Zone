import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink,ProductCardComponent,FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  constructor(private productService: ProductService,
     private categoryService: CategoriesService) {}
  products: any; 
  categories: any;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
    this.categoryService.getCategories().subscribe((response:any) => {
      this.categories = response;
      console.log(response);
      
    });
  }
}
