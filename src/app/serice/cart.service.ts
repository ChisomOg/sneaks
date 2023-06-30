import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  push(cart: any) {
    throw new Error('Method not implemented.');
  }
  cart: Cart[]= []
  constructor() { }

  getCart() {
    return this.cart
  }

  addCart(cart: Cart) {
    this.cart.push(cart)
  }

  deleteCart(n: number) {
    const cartIndex = this.cart.findIndex(n => n)
    if (cartIndex == -1) return
    this.cart.splice(cartIndex, 1)
  }

}
