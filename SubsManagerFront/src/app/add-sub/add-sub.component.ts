import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.scss']
})
export class AddSubComponent implements OnInit {
  public serviceName:string;
  public paymentDate : Date;
  public price: number;

  constructor() { }

  ngOnInit(): void {
  }

  public AddSubscription():void{
    
  }

}
