import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  login:string
  email:string
  password:string

  RegisterNewUser():void{

  }

  LogIn():void{
    
  }

  ngOnInit(): void {
  }

}
