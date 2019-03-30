import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage:boolean;
  serverErrorMessages:string;

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {
   
  }

  onSubmit(form:NgForm){
    this._userService.postUser(form.value).subscribe(
      res=>{
        this.showSucessMessage=true;
        setTimeout(()=>this.showSucessMessage=false,4000);
        this.resetForm(form);
      },
      err=>{
        if (err.status===402) {
          this.serverErrorMessages=err.error.join('<br/>');
          console.log(err.status);
        }
        else
        this.serverErrorMessages='Something went wrong. Please contact admin';
        
      }
    );
  }

  

  resetForm(form:NgForm){
    this._userService.selectedUser={
     fullName:'',
     email:'',
     password:''
    };
    form.reset();
    this.serverErrorMessages='';
     }

}
