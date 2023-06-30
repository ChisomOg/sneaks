import { Component, Input } from '@angular/core';
import { User } from './user';
import { EnrollService } from './enroll.service';
import { RouterOutlet } from '@angular/router';
import { Cart } from './serice/cart.model';
import { CartService } from './serice/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topics = ['React', 'Ang', 'Vue'];
  
  


  formHasError = true;
  submitted = false;
  errorMsg = '';
  title = 'sneaks';
  public name = "cisom";
  public message = "";



  userModel = new User('teen', 'sdg@td.com', 24363634, 'default', 'morning', true);



  constructor(private _enrollservice: EnrollService, private cartService: CartService) { }


  ngOnInit(): void {
    
  }
  

  openCart(): any {
    document.getElementById('moda1')!.style.display = 'block';
   
}
openB(): any {
  document.getElementById('d1')!.style.display = 'block';
 
}
closeB(): any {
  document.getElementById('d1')!.style.display = 'none';
 
}


  validateTopic(value: string) {
    if (value === 'default') {
      this.formHasError = true;
    } else {
      this.formHasError = false;
    }
  }


  



  onSubmit(userForm: any) {
    console.log(userForm)
   // this.submitted = true;
   //this._enrollservice.enroll(this.userModel)
   // .subscribe(
    //    data => console.log('success', data),
    //    error => this.errorMsg = error.statusText
    //  );
  }


  prepareRoute(outlet: RouterOutlet): any{
    if (outlet.isActivated) return outlet.activatedRouteData['tabN']
  };
}

