import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
visibleImages = [];
getImages(){
return this.visibleImages = IMAGES.slice(0);
  
}



getImage(id : number){

	return IMAGES.slice(0).find(image => image.id == id);
}

constructor() { }
}
const IMAGES = [
{"id" : 1, "url" : "assets/ppp.jpg"},
{"id" : 2, "url" : "assets/img2.jpg"},
{"id" : 3, "url" : "assets/img3.png"},
{"id" : 4, "url" : "assets/img4.jpg"},
{"id" : 5, "url" : "assets/img5.jpg"}
]