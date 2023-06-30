import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../serice/cart.model';
import { CartService } from '../serice/cart.service';
import { NotificationService } from '../serice/notification.service';

@Component({
  selector: 'app-women2',
  templateUrl: './women2.component.html',
  styleUrls: ['./women2.component.scss']
})
export class Women2Component implements OnInit {

  slides: any;
  dots: any;
  ho: any;
  selnum = 1 
  num = 1
  

  im = "assets/image/we21.jpg"
  im1 = "assets/image/we22.jpg"
  im2 = "assets/image/we23.jpg"

  imgs = this.im
 
  slideIndex = 1

  constructor(private cartService: CartService, private router: Router, private notificationService: NotificationService) {
 
   }

  ngOnInit(): void {
  }

  

  
  pic(): any{
    this.imgs = this.im
    this.imgs
  }

  pic1(): any{
    this.imgs = this.im1
    this.imgs
  }

  pic2(): any{
    this.imgs = this.im2
    this.imgs
  }


// Open the Modal
  openModal(): any {
    document.getElementById('myModal')!.style.display = 'block';
   
}

// Close the Modal
closeModal(): any {
  document.getElementById('myModal')!.style.display = 'none';
}



// Next/previous controls
plusSides(n: number) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
currentSlide(n: number) {
  this.showSlides(this.slideIndex = n);
}


showSlides(n: number){
  this.slides = document.getElementsByClassName("mySlides")!;
  this.dots = document.getElementsByClassName("demo")!;

  if (n > this.slides.length) {this.slideIndex = 1;}
  if (n < 1) {this.slideIndex = this.slides.length;}
  for (let i = 0; i < this.slides.length; i++) {
    this.slides[i].style.display = "none";
  }
  for (let i = 0; i < this.dots.length; i++) {
    this.dots[i].className = this.dots[i].className.replace(" active", "");
  }
  this.slides[this.slideIndex-1].style.display = 'block';
  this.dots[this.slideIndex-1].className += ' active';
}



  addnum(): void{
    if (this.num < 10 && this.num !== null ){
      this.num++
    } else {
      this.num
    } 

    this.num
  }

  subnum(): void{
    if (this.num > 0 ){
      this.num--
    } else {
      this.num
    } 

    this.num
  }


  addCart(){
      const cart = new Cart('Original white reem', 270, this.num, this.im);
      this.cartService.addCart(cart)
      this.router.navigateByUrl("/women2")
      this.notificationService.show('Added to cart')
    }

}
