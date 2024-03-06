// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter$ = this.counter.asObservable();

  cartItems: any[] = [];

  addToCart(item: any) {
    this.cartItems.push(item);
    this.updateCounter(this.cartItems.length);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCounter(this.cartItems.length);
  }

  updateQuantity(index: number, newQuantity: number) {
    this.cartItems[index].quantity = newQuantity;
  }

  private updateCounter(value: number) {
    this.counter.next(value);
    localStorage.setItem('counter', value.toString());
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
  
  getCounterFromLocalStorage(): number {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? +storedCounter : 0;
  }
}
