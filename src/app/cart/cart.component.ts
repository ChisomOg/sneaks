import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../serice/cart.model';
import { CartService } from '../serice/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart[] | undefined
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
  }

  closeCart(): any {
    document.getElementById('moda1')!.style.display = 'none';
  }

  deleteClick(cart: Cart){
    this.cartService.deleteCart(1)
  }

}
