import { Component, OnInit } from '@angular/core';
import { DoRequest } from '../functions/serverRequests';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor() {
    
  }

  public subsList: any[] = [];

  ngOnInit(): void {
    this.GetSubscriptionsFromServer().then();
  }

  public async GetSubscriptionsFromServer():Promise<void>{
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
    const res = await DoRequest(url)
    if (res !== null) {
      this.subsList = res.drinks;
      console.log(this.subsList);
    }
  }

  DeleteSubscription(id:number):void{
    this.subsList.forEach((element,index)=>{
      if(element.idDrink==id) delete this.subsList[index];
   });
   
  }
}
