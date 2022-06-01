import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DoRequest } from '../functions/serverRequests';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor(private authService:AuthService) {
    
  }

  public subsList: any[] = [];

  ngOnInit(): void {
    this.GetSubscriptionsFromServer().then();
  }

  public async GetSubscriptionsFromServer():Promise<void>{
    const url = 'https://localhost:5001/api/Subscriptions';
    const res = await DoRequest(url, 'GET', this.authService.token)
    if (res !== null) {
      this.subsList = await res.json();
      this.subsList.sort((a,b) => (a.price < b.price) ? 1 :-1);
      console.log(this.subsList);
    }
  }

  public async PaySubscription(id:number):Promise<void>{
    const url = 'https://localhost:5001/api/Subscriptions/pay/'+id;
    const res = await DoRequest(url, 'PUT', this.authService.token)
    if (res !== null) {
      console.log('Subscription was payed');
      this.GetSubscriptionsFromServer().then();
    }
    else{
      alert('Error happened');
    }
  }


  public async DeleteSubscription(id:number):Promise<void>{
    const url = 'https://localhost:5001/api/Subscriptions/delete/'+id;
    const res = await DoRequest(url, 'DELETE', this.authService.token);
    if (res !== null) {
      console.log('Subscription was deleted');
      this.GetSubscriptionsFromServer().then();
    }
    else{
      alert('Error happened');
    }
   
  }
}
