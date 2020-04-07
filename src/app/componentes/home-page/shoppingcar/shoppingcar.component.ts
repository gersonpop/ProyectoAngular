import { ArticuloService } from './../../../servicios/articulo.service';
import { CarshopService } from 'src/app/servicios/carshop.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-shoppingcar',
  templateUrl: './shoppingcar.component.html',
  styleUrls: ['./shoppingcar.component.scss']
})
export class ShoppingcarComponent implements OnInit {
  car:Producto[];
  productList:Producto[];

  total:number=0;
  constructor(
    private shoppingcar: CarshopService,
    private prodFire: ArticuloService
  ) { }

  ngOnInit() {
    this.car=this.shoppingcar.getCarshop()
    this.total = this.shoppingcar.totalCar();
  }
  comprar(){
    this.shoppingcar.comprar()
    this.total = this.shoppingcar.totalCar();
  }

  cancelar(){
    this.shoppingcar.detelaCarshop();
  }

  deleteItem(){

  }

}
