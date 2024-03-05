import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  images: string[] = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // mainImageUrl: string = this.images[0];

  // updateMainImage(imageUrl: string): void {
  //   this.mainImageUrl = imageUrl;
  // }
  // trackByFn(index: number, item: any): number {
  //   return index; // or return item.id; if your items have unique identifiers
  // }
}
