import {Component,Input, OnInit} from '@angular/core'
import { Card } from '../app.component'

@Component ({
    selector: 'app-card',
    templateUrl: './card.component.html',

    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
    @Input() card: Card
    @Input() card_index: number

    title:string = 'My Card title'
    text:string = 'Card description'
    cardDate:Date = new Date()
    
    isDisabled = false

    imgUrl = 'https://cdn-icons-png.flaticon.com/512/54/54346.png'

    ngOnInit() {
       console.log('lalallalalalala')
    }

    DisableImage():void{
        if(this.isDisabled){
            this.imgUrl = 'https://cdn-icons-png.flaticon.com/512/54/54346.png'
            this.isDisabled = false
        }
        else{
            this.imgUrl = ''
            this.isDisabled = true
        }
    }

    InputHandle(s:string){
        this.card.title = s
    }

    getInfo():string {
        return this.card.text
    }
}