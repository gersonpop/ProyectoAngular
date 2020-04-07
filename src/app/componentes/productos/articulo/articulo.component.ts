import { NotificacionService } from '../../../servicios/notificacion.service';

import { Component, OnInit , ElementRef ,ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";
import { ArticuloService } from "../../../servicios/articulo.service";
import { Producto } from "../../../models/producto";
import { AngularFireStorage } from "@angular/fire/storage";
import {  finalize } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
 nombre: string;
 public imagen: string;
 @ViewChild('imagenArticulo', null  ) inputimageArticulo: ElementRef;
  constructor(private articuloService: ArticuloService,
              private storage: AngularFireStorage,
              private notif: NotificacionService,
              private http: HttpClient,
              private dialogReg: MatDialogRef<ArticuloComponent>
              ) { }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  @ViewChild('imagenArticulo' ) inputimageUser: ElementRef;
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
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())
    ).subscribe();
    const urlget="https://firebasestorage.googleapis.com/v0/b/onlinestore-3fc65.appspot.com/o/"+filePath.replace("/","%2F");
    this.http.get(urlget).subscribe(data=>{
      this.articuloService.selectActiculo.imagen="https://firebasestorage.googleapis.com/v0/b/"  + data.bucket +"/o/" +data.name.replace("/","%2F") +"?alt=media&token=" + data.downloadTokens
       ;
    })


  }
  onSubmit(articuloForm: NgForm, e ){


    if(articuloForm.value.skey == null){
      this.articuloService.insertArticulo(articuloForm.value);
      this.notif.success("Se creo el articulo exitosamente", "OK");
    }
    else{
      this.articuloService.updateArticulo(articuloForm.value);
      this.notif.success("Se actualizo el articulo exitosamente", "OK");
    }
    this.resetForm(articuloForm);
    this.dialogReg.close();
  }
  onClose(){
    this.dialogReg.close();
  }
  resetForm(articuloForm?: NgForm){      //el ? opcional el argumento
    if( articuloForm!= null){
      articuloForm.reset();
      this.articuloService.selectActiculo= new Producto();
    }
  }

}
