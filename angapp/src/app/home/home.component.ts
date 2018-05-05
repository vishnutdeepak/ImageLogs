import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';
import {Observable, Subscription } from 'rxjs/Rx';    
import { MessageService } from '../message.service';
import {  ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {

	book = {action: "null"};

private timer;
ticks=0;
private sub: Subscription;

visibleImages: any[] = [];
  constructor(private imageService : ImageService, private messageService: MessageService, private http: HttpClient, private router: Router ) { 

this.visibleImages = this.imageService.getImages();
  }
 

  ngOnInit() {
  }



saveBook() {


    this.http.post('/book', this.book)
      .subscribe(res => {
          let id = res['_id'];
          
        }, (err) => {
          console.log(err);
        }
      );
  }



logclick(id: number){
	this.book.action="Clicked "+id + ' at ' + this.getDatetime();
	this.saveBook();
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
this.book.action=div + ' at ' + this.getDatetime();
	this.saveBook();
      this.messageService.add(div + ' at ' + this.getDatetime());
   }

   mouseLeave(div : string){
   	this.book.action=div+' after '+this.ticks+' seconds' + ' at ' + this.getDatetime();
	this.saveBook();
   	this.messageService.add(div+' after '+this.ticks+' seconds' + ' at ' + this.getDatetime());
   	this.ticks=0;
   	 
        this.sub.unsubscribe();
     
   }

  

}
