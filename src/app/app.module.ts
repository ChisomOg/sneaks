import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesComponent } from './tes/tes.component';
import { Tea1Component } from './tea1/tea1.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { Men1Component } from './men1/men1.component';
import { Men2Component } from './men2/men2.component';
import { Men3Component } from './men3/men3.component';
import { Women1Component } from './women1/women1.component';
import { Women2Component } from './women2/women2.component';
import { Women3Component } from './women3/women3.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { Highlightm1Component } from './highlightm1/highlightm1.component';
import { CartComponent } from './cart/cart.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TesComponent,
    Tea1Component,
    Men1Component,
    Men2Component,
    Men3Component,
    Women1Component,
    Women2Component,
    Women3Component,
    MenComponent,
    WomenComponent,
    AboutComponent,
    CollectionComponent,
    HomeComponent,
    Highlightm1Component,
    CartComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
