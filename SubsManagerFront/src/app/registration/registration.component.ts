import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public login:string = '';
  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  public async RegisterNewUser():Promise<void>{
    if(this.password !== this.repeatPassword)
      alert('Repeat the password!');
    else{
      this.authService.register(this.login, this.password, this.email);
    }
  }

}
