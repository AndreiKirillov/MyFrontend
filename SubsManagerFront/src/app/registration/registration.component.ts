import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  public async RegisterNewUser():Promise<void>{
    if(this.password !== this.repeatPassword)
      alert('Repeat the password!');
    else{
      if(this.login !== '' && this.email !== '' && this.password.length >7){
        const res = await this.authService.register(this.login, this.password, this.email);
        if(res!==null){
          this.router.navigate(['home']);
        }

      }
      else{
        alert('Введите данные');
      }
    }
  }

}
