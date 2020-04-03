import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ArticuloService } from "../../servicios/articulo.service";
import { Producto } from "../../models/producto";

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
 nombre: string;
  constructor(private articuloService: ArticuloService) { }

  ngOnInit() {
    this.articuloService.getArticulo();

  }
  onSubmit(articuloForm: NgForm){
    this.articuloService.insertArticulo(articuloForm.value);
    this.resetForm(articuloForm);
  }
  resetForm(articuloForm?: NgForm){      //el ? opcional el argumento
    if( articuloForm!= null){
      articuloForm.reset
      this.articuloService.selectActiculo= new Producto();
    }
  }

}
