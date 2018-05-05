import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
users: Array<any>;

  constructor(private _dataService:DataService){

this._dataService.getUsers().subscribe(res => this.users = res);
  }
}
