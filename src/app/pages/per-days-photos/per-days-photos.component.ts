import { Component, OnInit} from '@angular/core';
import { MarsImagesService } from 'src/app/core/services/mars-images.service';

@Component({
  selector: 'app-per-days-photos',
  templateUrl: './per-days-photos.component.html',
  styleUrls: ['./per-days-photos.component.css']
})
export class PerDaysPhotosComponent implements OnInit {

  marsphoto: any= [];
  
 constructor ( private marsImagesService: MarsImagesService) { }
  ngOnInit(): void {

    this.marsphoto = this.marsImagesService.getMarsImages().subscribe(
      (response) =>
       {
        console.log(response);
        this.marsphoto = response.photos;
      },
      (error) => {
        console.log('not ok');
      }
      );
    console.log(this.marsImagesService);
  }

}
