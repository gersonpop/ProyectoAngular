import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
 public cards = [
    {
      articulo: 'Aguacate',
      precio: 5,
      disponible: 3,
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      articulo: 'Ajo',
      precio: 2,
      disponible: 4,
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      articulo: 'Almendras',
      precio: 8,
      disponible: 5,
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      articulo: 'Arandanos',
      precio: 6,
      disponible: 6,
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
