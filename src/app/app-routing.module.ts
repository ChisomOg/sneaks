import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { Men1Component } from './men1/men1.component';
import { Men2Component } from './men2/men2.component';
import { Men3Component } from './men3/men3.component';
import { WomenComponent } from './women/women.component';
import { Women1Component } from './women1/women1.component';
import { Women2Component } from './women2/women2.component';
import { Women3Component } from './women3/women3.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/collection', component: CollectionComponent},
  {path:'home/men', component: MenComponent },
  {path:'home/men/men1', component: Men1Component },
  {path:'home/men/men2', component: Men2Component },
  {path:'home/men/men3', component: Men3Component },
  {path:'home/women', component: WomenComponent },
  {path:'home/women/women1', component: Women1Component },
  {path:'home/women/women2', component: Women2Component },
  {path:'home/women/women3', component: Women3Component },
  {path: 'home/about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
