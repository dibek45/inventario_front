import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../../shared/user.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
serverErrorMessages:string;
  constructor(private _userService:UserService, private router:Router) { 

  }

model={
  email:'',
  password:''
}
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() {
    if (this._userService.isLoggedIn) {
      this.router.navigateByUrl('/userProfile');
    }
  }

  onSubmit(form:NgForm){
    
    this._userService.login(form.value).subscribe(
      (res)=>{
        console.log(JSON.stringify(res['token']));
        this._userService.setToken(res['token']);
        this.router.navigateByUrl('/userProfile');
      },
      (err)=>{
        console.log(JSON.stringify(err));
        this.serverErrorMessages=err.error.message;
      })
  }
}
