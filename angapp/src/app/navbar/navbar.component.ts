import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-navbar',

  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.scss']

})


export class NavbarComponent implements OnInit {

  title = 'Gallery';



 



  constructor() { }



  ngOnInit() {

  }

getbold(val: string){
	val=val.bold();
	this.title = val;
	return val;

}

}