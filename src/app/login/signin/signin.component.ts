import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public  loginForm !:FormGroup
  constructor( private FormBuilder:FormBuilder,private http:HttpClient ,private router:Router) { }


  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  login(){
    this.http.get<any>('https://fakestoreapi.com/users').subscribe(res=>{
      const User = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(User) {
        alert("Login Success!!")
        this.loginForm.reset()
        this.router.navigate(['/products'])
      }else{
        alert("user not found!!")
      }
    },err=>{
      alert("something went wrong!!")
    })
  }

  signup(){
    this.router.navigate(['/signup'])
  }


}
