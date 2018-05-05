import { Injectable } from '@angular/core';



@Injectable()
export class MessageService {
  messages: string[] = ["Nothing to show"];
message1: string;
  add(message: string) {
  	this.message1= this.messages.pop();
  	if(!(this.message1==="Nothing to show"))
  	{
  		this.messages.push(this.message1);
  	}

    this.messages.push(message);
  }

  clear() {
    this.messages = ["Nothing to show"];
  }
}