import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 order: string = 'name';

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}