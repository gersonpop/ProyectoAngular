import { Injectable } from '@angular/core';
import {  AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import {  Producto } from "../models/producto";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  productList: AngularFireList<any>;
  selectActiculo: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase, private http: HttpClient) {

   }
   updateDisponible(articulo: Producto){
    console.log(articulo);
     this.productList.update(articulo.skey, {
      nombre: articulo.nombre,
      disponible: articulo.disponible
     });
   }


   getArticulo(){
    return this.productList = this.firebase.list('products');
   }
   insertArticulo(articulo: Producto){
    console.log(articulo);
    this.productList.push({
      nombre: articulo.nombre,
      descripcion: articulo.descripcion,
      precio: articulo.precio,
      disponible: articulo.disponible,
      imagen: articulo.imagen
    });
   }
   updateArticulo(articulo: Producto){
    console.log(articulo);
     this.productList.update(articulo.skey, {
      nombre: articulo.nombre,
      descripcion: articulo.descripcion,
      precio: articulo.precio,
      disponible: articulo.disponible,
      imagen: articulo.imagen
     });
   }
   deleteArticulo(skey: string){
     this.productList.remove(skey);
   }
}
