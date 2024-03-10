// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError, throwError } from 'rxjs';
import {CheckoutService} from './checkout.service'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/carts/';

  // constructor(private http: HttpClient) { }

  constructor(private checkoutService: CheckoutService, private http: HttpClient) {}
  private counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter$ = this.counter.asObservable();

  cartItems: any[] = []
  counterSubject: any;

  addToCart(cartItem: any) : Observable<any>{
    const url: string = this.baseUrl + "add";
    console.log(url);
    console.log(cartItem);

    return this.http.post(url, cartItem);
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
  
  placeOrder() {
    // Implement logic to handle order placement, such as sending an API request
    // // to a server or updating a database
    // alert('Your order will place to us , wait until shipping and pay in cash');

    // Reset the cart after placing the order
    this.cartItems = [];
    this.updateCounter(0);
    this.checkoutService.showPopup('Your order will place to us , wait until shipping and pay in cash');
  }
  updateCounterr(counter: number) {
    this.counterSubject.next(counter);
  }
  getCounterFromLocalStorage(): number {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? +storedCounter : 0;
  }

  
}
