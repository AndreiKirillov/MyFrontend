import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';
import { SubscriptionComponent } from './subscription/subscription.component';


export interface Card{
  title:string
  text:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isToggled = true

 

  cards: Card[]=[
    {title: 'Card1', text:'It is card 1'},
    {title: 'Card2', text:'It is card 2'},
    {title: 'Card3', text:'It is card 3'}
  ]



  toggleCards():void{
    this.isToggled = !this.isToggled
  }
}
