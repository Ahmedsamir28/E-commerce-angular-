import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './../shared/component/select/select.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { ProductComponent } from './component/product/product.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,

  ],
})
export class ProductsModule { }
