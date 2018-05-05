import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';
import {Observable, Subscription } from 'rxjs/Rx';    
import { MessageService } from '../message.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
private timer;
ticks=0;
private sub: Subscription;

visibleImages: any[] = [];
  constructor(private imageService : ImageService, private messageService: MessageService ) { 

this.visibleImages = this.imageService.getImages();
  }
 

  ngOnInit() {
  }
logclick(id: number){

	
	this.messageService.add("Clicked "+id + ' at ' + this.getDatetime());
}

tickerFunc(tick){
       
        this.ticks = tick
    }
 getDatetime = function() {
  return (new Date);
};

mouseEnter(div : string){
	 this.timer = Observable.timer(0,1000);
this.sub = this.timer.subscribe(t => this.tickerFunc(t));

      this.messageService.add(div + ' at ' + this.getDatetime());
   }

   mouseLeave(div : string){
   	this.messageService.add(div+' after '+this.ticks+' seconds' + ' at ' + this.getDatetime());
   	this.ticks=0;
   	 
        this.sub.unsubscribe();
     
   }

  

}
