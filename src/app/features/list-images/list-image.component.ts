import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImageComponent implements OnInit {

  @Input() marsPhotos: any;
  @Input() jour : any;
  @Input() mois : any;
  @Input() annee : any;
  @Input() envoyer: any ;
  
  constructor() { }

  ngOnInit(): void {

    console.log(this.marsPhotos);
  }

}