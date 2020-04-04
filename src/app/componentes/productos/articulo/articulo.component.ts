import { Component, OnInit , ElementRef ,ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";
import { ArticuloService } from "../../../servicios/articulo.service";
import { Producto } from "../../../models/producto";
import { AngularFireStorage } from "@angular/fire/storage";
import {  finalize } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
 nombre: string;
 public imagen: string;
 @ViewChild('imagenArticulo', null  ) inputimageArticulo: ElementRef;
  constructor(private articuloService: ArticuloService,    public storage: AngularFireStorage) { }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  ngOnInit() {
    this.articuloService.getArticulo();

  }
  onUpload(e){

    console.log("subir",e.target.files[0].name);
    const name=e.target.files[0].name;
    const id= Math.random().toString(32).substring(2);   //genera id unico
    const file = e.target.files[0];
    const filePath = `Artuculos/${name}`;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();// tomar url de imagen

    console.log("la ruta es : " + JSON.stringify(this.urlImage.map));
    this.articuloService.selectActiculo.imagen=this.inputimageArticulo.nativeElement



  }
  onSubmit(articuloForm: NgForm){
    console.log(articuloForm.value.skey);
    if(articuloForm.value.skey == null)
      this.articuloService.insertArticulo(articuloForm.value);
    else
    this.articuloService.updateArticulo(articuloForm.value);

    this.resetForm(articuloForm);
  }
  resetForm(articuloForm?: NgForm){      //el ? opcional el argumento
    if( articuloForm!= null){
      articuloForm.reset
      this.articuloService.selectActiculo= new Producto();
    }
  }

}
