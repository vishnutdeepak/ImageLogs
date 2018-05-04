import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

goals: any;
  constructor(private _data: DataService, private route: ActivatedRoute, private router: Router) {

this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {

  	this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome(){

  	this.router.navigate(['']);
  }

}
