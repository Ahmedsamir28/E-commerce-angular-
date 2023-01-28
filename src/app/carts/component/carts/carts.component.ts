import { CartsService } from './../../srvices/carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartProducts:any[]=[]
  total:any =0
  success:boolean = false

  constructor(private services:CartsService) { }

  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts(){

    if ("cart"in localStorage) {
      this.cartProducts =JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal()
  }
  getCartTotal(){
    this.total=0
    for (const x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
      }
    }

    addAmount(index:number){
      this.cartProducts[index].quantity++
      this.getCartTotal()
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))

    }
    detectChange(){
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }

    minsAmount(index:number){
      this.cartProducts[index].quantity--
      this.getCartTotal()
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))

    }
    deleteProduct(index:number){
      this.cartProducts.splice(index , 1)
      this.getCartTotal()

      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }
    clearCart(){
      this.cartProducts = []
      this.getCartTotal()
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }
    addCart(){
      let products = this.cartProducts.map(item=>{
        return {productid:item.item.id , quantity:item.quantity}
      })
      let model = {
        userid:5,
        date:new Date(),
        products:products
      }
      this.services.createNewCart(model).subscribe(res=>{
        this.success = true

      })
    }


  }

