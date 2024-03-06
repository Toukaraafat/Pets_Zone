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
// export class CartComponent implements OnInit{
// items:product[] = [];
// i: number;

// constructor(private cartService: CartService){ }

// ngOnInit() : void{
// this.cartService.cartItems.subscribe(data =>{
//   this.items = data;
// });
// }
// onDelete(i:number){
//   this.items.splice(i,1);
//   this.cartService.setCartData(this.items);

// }
// validateInput(event:any,i:number){
//   const qty = +event.target.values;
//   if(qty<1){
//     event.target.value = this.items[i].qty;
//     return;
//   }
//   this.QtyUpdated(qty,i)
// }
// private QtyUpdated(qty:number,i:number){
//   this.items[i].qty = qty;
//   this.cartService.setCartData(this.items);
// }
}