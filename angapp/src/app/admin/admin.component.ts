import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { OrderModule } from 'ngx-order-pipe';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 order: string = 'name';
users: Array<any>;
books: any;
messages: string

  constructor(private router: Router,public messageService: MessageService,private route: ActivatedRoute,private _dataService:DataService,private http: HttpClient) { 


this._dataService.getUsers().subscribe(res => this.users = res);

  }

  ngOnInit() {

  	this.http.get('/book').subscribe(data => {
    this.books = data;
  });

  }
deleteBook(id) {
  this.http.delete('/book/'+id)
    .subscribe(res => {
        this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      }
    );
}




}
