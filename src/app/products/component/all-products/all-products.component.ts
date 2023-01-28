import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/products';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: product[] = []
  Categories: string[] = []
  loading: boolean = false
  cartProducts:any[] =[]

  constructor (private service: ProductsService) { }

  ngOnInit(): void {
    this.getproducts()
    this.getCategories ()
  }

  getproducts() {
    this.loading=true

    this.service.getAllproducts().subscribe((arg:any )=>{
      this.loading=false
      this.products= arg

    },error=>{
        console.log(error.message)}
    );
    
  }

  getCategories() {
    this.loading=true

    this.service.getAllCategories().subscribe((res: any) => {
      this.loading=false
      this.Categories = res

    }, error => {
      console.log(error.message)
    }
    )
  }

  filterCategories(event:any){
    let value = event.target.innerText.toLowerCase();
    (value == "all") ? this.getproducts(): this.getProductsCategory(value)
  }

  getProductsCategory(keyword:string){
    this.loading=true

    this.service.getProductByCategories(keyword).subscribe((arg:any) =>{
    this.loading=false
    this.products=arg
    },error => {
      console.log(error.message)
    }
    )
  }
  addToCart(event:any){
    if ("cart"in localStorage) {
      this.cartProducts =JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item=>item.id==event.item.id)
      if (exist) {
        alert("products is already in your cart")
      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }
      
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }

  }

}
