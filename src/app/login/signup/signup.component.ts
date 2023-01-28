import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  public signupForm !:FormGroup;

  constructor(private FormBuilder:FormBuilder ,private http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required],
    })
}


signUp(){
this.http.post<any>('https://fakestoreapi.com/users',this.signupForm.value)
.subscribe(res=>{
  alert("Signup Successfull")
  this.signupForm.reset()
  this.router.navigate(['/signin'])

},err=>{
  alert("Something went wrong")
})
}

signin(){
  this.router.navigate(['/signin'])
}

}
