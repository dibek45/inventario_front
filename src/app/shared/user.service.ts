import { Injectable } from '@angular/core';
import {User} from './user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment}  from '../../environments/environment'
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})};

  selectedUser: User={
  fullName:'',
  email:'',
  password:''
}
  constructor(private http:HttpClient) { }

  //htp Methods
  postUser(user:User){
   return this.http.post(environment.apiBaseUrl+'/register', user,this.noAuthHeader);
  }

 login(authCredentials){
     return this.http.post(environment.apiBaseUrl+'/authenticate',authCredentials,this.noAuthHeader);
 }
 getUserProfile(){
   return this.http.get(environment.apiBaseUrl+'/userProfile');
 }




 //Helper methods 
  setToken(token:string){
    localStorage.setItem('token',token);
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    var userPayload=this.getUserPayload();
    if (userPayload) {
        return userPayload.exp> Date.now()/1000;
    }else
      return false;
  }

  getUserPayload(){
    var token=this.getToken();
    if (token) {
        var userPayload=atob(token.split('.')[1]);
        return JSON.parse(userPayload);
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }
}

