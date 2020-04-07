import { Respuesta } from './../models/respuesta';
import { Articulo } from './../models/articulo';

import { Injectable } from '@angular/core';
import {  Producto } from "../models/producto";



@Injectable({
  providedIn: 'root'
})
export class CarshopService {
 public carshop= new Array<Producto>();

 public confirmacion: Respuesta;

  constructor( ) {}

  res:Respuesta;
  getCarshop():Producto[] {
    if(localStorage.getItem("carshop")=== null){
      this.carshop=[];
    }else{
      this.carshop = JSON.parse(localStorage.getItem('carshop'))
    }
    return this.carshop;

  }

  result(acc:boolean, descr: string){

    this.confirmacion.accion=acc;
    this.confirmacion.descripcion=descr;

    return this.confirmacion;

  };

  addItem(item: Producto){


    this.carshop=[];
    if(localStorage.getItem("carshop")=== null){
      this.carshop=[];
      this.carshop.push(item);
      localStorage.setItem('carshop', JSON.stringify(this.carshop))


    }else{
      this.carshop=[];
      this.carshop = JSON.parse(localStorage.getItem('carshop'));
      this.carshop.unshift(item);
      console.log(this.carshop);
      localStorage.setItem('carshop', JSON.stringify(this.carshop))

    }


  }

  removeItem(item: Producto):void{
    for(let i =0 ; this.carshop.length; i++ ){
      if(item == this.carshop[i]){
        this.carshop.splice(i, 1);
        localStorage.setItem('casrshop', JSON.stringify(this.carshop))
      }
    }
  }

  detelaCarshop(){
    this.carshop=[];
    localStorage.setItem('casrshop', JSON.stringify(this.carshop))
  }


}
