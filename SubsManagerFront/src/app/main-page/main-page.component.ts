import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  public isAuth():boolean{
    return this.authService.isAuth;
  }
}
