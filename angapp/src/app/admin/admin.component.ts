import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { OrderModule } from 'ngx-order-pipe';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 order: string = 'name';
users: Array<any>;
  constructor(public messageService: MessageService,private _dataService:DataService) { 


this._dataService.getUsers().subscribe(res => this.users = res);

  }

  ngOnInit() {
  }

}
