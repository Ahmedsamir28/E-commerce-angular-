import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  item :any

  getAllproducts(){
    return this.http.get(environment.baseApi+'products')
  }
  getAllCategories(){
    return this.http.get(environment.baseApi+'products/categories')
  }

  getProductByCategories(keywords:string){
    return this.http.get(environment.baseApi+'products/category/'+keywords)
  }
  getProductByiD(id:any){
    return this.http.get(environment.baseApi+'products/'+id)

  }
}

