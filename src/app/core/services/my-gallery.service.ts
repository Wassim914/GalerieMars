import { Injectable } from '@angular/core';
import { ListImagesItemComponent } from 'src/app/features/list-images-item/list-images-item.component';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {

  image: any=[

  ];
  addPhoto(photogallery: any){
    
    this.image.push({
      photogallery 
    });
  }
  constructor() { }
}
