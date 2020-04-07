
import { ProductosComponent } from './../componentes/productos/productos.component';
import { ArticuloService } from './articulo.service';
import { Respuesta } from './../models/respuesta';
import { Articulo } from './../models/articulo';

import { Injectable } from '@angular/core';
import {  Producto } from "../models/producto";



@Injectable({
  providedIn: 'root'
})
export class CarshopService {
 public carshop: Producto[];
  public Articulo: Producto[];
  public producto: Producto;
 public confirmacion:string[];

  constructor( private prodFire: ArticuloService) {}
  flag:boolean=false;
  total:number=0;
  res:Respuesta;

  getCarshop():Producto[] {
    if(localStorage.getItem("carshop")=== null){
      this.carshop=[];
    }else{
      this.carshop = JSON.parse(localStorage.getItem('carshop'))
    }
    return this.carshop;
  }

  totalCar(): number{
    for(let element of this.carshop ){
      this.total=this.total +  (element.pedido*element.precio)
    }
    return this.total
  }
  comprar( ){

    this.carshop = JSON.parse(localStorage.getItem('carshop'));
    for(let i =0 ; this.carshop.length; i++ ){
      this.producto.nombre=this.carshop[1].nombre
      this.producto.disponible=this.carshop[1].disponible-this.carshop[i].pedido
      this.prodFire.updateDisponible(this.producto);
    }
    this.detelaCarshop();
  }


  result(acc:string, descr: string, valor: string){
    this.flag=false;
    this.confirmacion[0]=acc;
    this.confirmacion[1]=descr;
    this.confirmacion[2]=valor;
  }

  addItem(item: Producto){
    this.flag=false
    this.carshop=[];
    if(localStorage.getItem("carshop")=== null){
      console.log("primer producto")
      this.carshop=[];
      this.carshop.push(item);
      localStorage.setItem('carshop', JSON.stringify(this.carshop))
      this.result ("OK", "se ha agregados correctamente al caro de campas", "")
    }else{
      console.log("segundo producto producto")
      this.carshop=[];
      this.carshop = JSON.parse(localStorage.getItem('carshop'));

      for(let result of this.carshop){
        if(item.skey == result.skey){
          this.flag=true
          if(result.pedido==result.disponible){
            this.confirmacion= ["NO", "Tienes este producto en tu carro y no hay mas stock", "0"];
          }
          else if(item.pedido>(result.disponible-result.pedido)){
            item.pedido=result.disponible-result.pedido
            this.confirmacion= ["NO", "Tienes este producto en tu carro y se ajustaron las cantidades en tu compra", item.pedido.toString()];
          }else{
            result.pedido=item.pedido+result.pedido
            this.confirmacion= ["OK", "Tienes este producto en tu carro y agreraron mas cantidades a tu carro", item.pedido.toString()]
          }
        }
      }//*/
      console.log(this.flag);

      if(!this.flag){
      this.carshop.unshift(item);
        this.confirmacion= ["OK","El producto se agrego a tu carrito de compras",""]
    }
      console.log(this.carshop);
      localStorage.setItem('carshop', JSON.stringify(this.carshop))
    }
    //console.log(this.confirmacion);

    return this.confirmacion;
  }

  removeItem(item: Producto):void{
    this.carshop = JSON.parse(localStorage.getItem('carshop'));
    for(let i =0 ; this.carshop.length; i++ ){
      if(item.skey == this.carshop[i].skey){
        this.carshop.splice(i, 1);
        localStorage.setItem('carshop', JSON.stringify(this.carshop))

      }
    }
  }

  detelaCarshop(){
    this.carshop=[];
    localStorage.setItem('casrshop', JSON.stringify(this.carshop))
  }


}
