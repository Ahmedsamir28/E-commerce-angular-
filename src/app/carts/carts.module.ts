import { RouterModule } from '@angular/router';
import { ProductsModule } from './../products/products.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './component/carts/carts.component';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsModule,
    RouterModule
  ]
})
export class CartsModule { }
