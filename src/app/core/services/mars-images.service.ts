import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerDaysPhotosComponent } from 'src/app/pages/per-days-photos/per-days-photos.component';
import { ListImageComponent } from 'src/app/features/list-images/list-image.component';

@Injectable({
  providedIn: 'root'
})

export class MarsImagesService {

  
  APIKEY = "&api_key=mxaTWZ3ZxTJUzuolu7oaCXWmC96LDblWj2RAItUY";
  URLAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date={{annee}}-{{mois}}-{{jour}}";
 
  marsPhotos = [
    {id: "1", img_src:"../../../assets/img/img_1.jpeg"},
    {id: "2", img_src:"../../../assets/img/img_2.jpeg"},
    {id: "3", img_src:"../../../assets/img/img_3.jpeg"},
    {id: "4", img_src:"../../../assets/img/img_4.jpeg"},
    {id: "5", img_src:"../../../assets/img/img_5.jpeg"}
  ];

  getMarsImages(){
  //return this.marsPhotos;
  return this.http.get<any>(this.URLAPI + this.APIKEY)

  }
  constructor(private http: HttpClient) { 

  }
  ngOnInit() {
  }

}
