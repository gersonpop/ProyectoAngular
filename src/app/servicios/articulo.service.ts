import { Injectable } from '@angular/core';
import {  AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import {  Producto } from "../models/producto";
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  productList: AngularFireList<any>;
 selectActiculo: Producto = new Producto();
  constructor(private firebase: AngularFireDatabase) {

   }

   getArticulo(){
    return this.productList = this.firebase.list('products');
   }
   insertArticulo(articulo: Producto){
    this.productList.push({
      nombre: articulo.nombre,
      descripcion: articulo.descripcion,
      precio: articulo.precio,
      disponible: articulo.disponible,
      imagen: articulo.img
    });
   }
   updateArticulo(articulo: Producto){
     this.productList.update(articulo.skey, {
      nombre: articulo.nombre,
      descripcion: articulo.descripcion,
      precio: articulo.precio,
      disponible: articulo.disponible,
      imagen: articulo.img
     });
   }
   deleteArticulo(skey: string){
     this.productList.remove(skey);
   }
}
