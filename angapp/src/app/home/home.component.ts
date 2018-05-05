import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

visibleImages: any[] = [];
  constructor(private imageService : ImageService ) { 

this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }
logclick(id: number){

	console.log("clicked"+id);
}

mouseEnter(div : string){
      console.log("mouse enter : " + div);
   }

   mouseLeave(div : string){
     console.log('mouse leave :' + div);
   }

}
