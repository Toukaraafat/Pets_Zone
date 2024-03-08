// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CheckoutService } from './checkout.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter$ = this.counter.asObservable();

  cartItems: any[] = [];
  counterSubject: any;

  constructor(private checkoutService: CheckoutService) {
    // Retrieve cart data from local storage on service initialization
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.updateCounter(this.cartItems.length);
    } else {
      this.updateCounter(0);
    }
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.updateCounter(this.cartItems.length);
    this.saveCartToLocalStorage();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCounter(this.cartItems.length);
    this.saveCartToLocalStorage();
  }

  updateQuantity(index: number, newQuantity: number) {
    this.cartItems[index].quantity = newQuantity;
    this.saveCartToLocalStorage();
  }

  private updateCounter(value: number) {
    this.counter.next(value);
    localStorage.setItem('counter', value.toString());
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getCounterFromLocalStorage(): number {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? +storedCounter : 0;
  }

  placeOrder() {
    // Implement logic to handle order placement, such as sending an API request
    // to a server or updating a database
    // alert('Your order will place to us , wait until shipping and pay in cash');

    // Reset the cart after placing the order
    this.cartItems = [];
    this.updateCounter(0);
    this.saveCartToLocalStorage();
    this.checkoutService.showPopup('Your order will place to us , wait until shipping and pay in cash');
  }

  updateCounterr(counter: number) {
    this.counterSubject.next(counter);
  }
}
