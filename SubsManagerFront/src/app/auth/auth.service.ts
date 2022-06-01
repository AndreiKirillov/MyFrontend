import { Injectable } from '@angular/core';
import { DoRequest } from "../functions/serverRequests";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = false;
  public token: string = '';

  constructor() {
  }

  public async login(login: string, password: string, email:string): Promise<void> {
    const body = { login, password, email };
    const res = await DoRequest('https://localhost:5001/api/Auth/login', 'POST', '',JSON.stringify(body));
    if(res !==null){
        this.isAuth = true;
        this.token = await res.text();
        console.log('auth is done');
    }
    else{
        alert('You can not login');
    }
  }

  public async register(login: string, password: string, email:string):Promise<void>{
    const body = { login, password, email };
    const res = await DoRequest('https://localhost:5001/api/Auth/registration', 'POST', '',JSON.stringify(body));
    if(res !==null){
      console.log('You have registered');
      const auth_res = await this.login(login, password, email);
    }
    else{
      alert('Registration failed!');
    }
  }

  public logout(): void {
    this.isAuth = false;
    this.token = '';
  }
}