import { SignupComponent } from './login/signup/signup.component';
import { SigninComponent } from './login/signin/signin.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/component/carts/carts.component';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/component/products-details/products-details.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:"cart" , component:CartsComponent}, 
  {path:"signup" , component:SignupComponent}, 
  {path:"signin" , component:SigninComponent}, 
  {path:"**" , redirectTo:"products" , pathMatch:"full"}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
