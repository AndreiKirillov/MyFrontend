import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login:string = '';
  public email: string = '';
  public password: string = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  public auth(): void {
    this.authService.login(this.login, this.password, this.email);
  }
}
