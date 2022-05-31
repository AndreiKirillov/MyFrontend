import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DoRequest } from "../functions/serverRequests";
import { DatePipe } from '@angular/common';

import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.scss']
})
export class AddSubComponent implements OnInit {
  public serviceName:string = '';
  public paymentDate :Date = new Date();
  public price: number = -1;

  constructor(
    private authService:AuthService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
  }

  public async AddSubscription():Promise<void>{
    if(this.serviceName === '' || this.price === -1)
      alert('Input parameteres of subscription');
    else{
      const serviceName:string = this.serviceName;
      const paymentDate = moment(this.paymentDate).format('yyyy-MM-DD');
      const price:number = this.price;
      const body = {serviceName, paymentDate, price} ;

      const url = 'https://localhost:5001/api/Subscriptions/add';
      
      const result = await DoRequest(url, 'POST', this.authService.token, JSON.stringify(body));
      if(result === null)
        alert('Error! Subscription was not added');
      else{
        console.log('Subscription was added');
      }

    }
  }

}
