import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor() {
    
  }

  public list: any[] = [];

  serviceName:string
  paymentDate: string//Date = new Date()
  price:number

  ngOnInit(): void {
  }

  DeleteSubscription(id:number):void{

  }
}
