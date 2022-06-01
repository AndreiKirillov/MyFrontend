import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public async auth(): Promise<void> {
    const res = await this.authService.login(this.login, this.password, this.email);
    console.log(this.authService.token);
    this.router.navigate(['subscriptions']);
  }
}
