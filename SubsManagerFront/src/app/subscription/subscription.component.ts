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
      console.log(this.subsList);
    }
  }

  DeleteSubscription(id:number):void{
    this.subsList.forEach((element,index)=>{
      if(element.id==id) delete this.subsList[index];
   });
   
  }
}
