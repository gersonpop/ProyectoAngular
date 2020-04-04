import { Component, OnInit } from '@angular/core';
import { ArticuloService } from "../../../servicios/articulo.service";
import { Producto } from "../../../models/producto";
import { ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  productList: Producto[];
  constructor(private articuloService: ArticuloService,
             private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.articuloService.getArticulo()
      .snapshotChanges()
      .subscribe(item => {
        this.productList=[];
        item.forEach(element =>{
          let x = element.payload.toJSON();
          x["skey"] = element.key;
          this.productList.push(x as Producto);
        });
      });
  }
  onEdit(articulo: Producto){
    this.articuloService.selectActiculo = Object.assign({}, articulo);

  }

  onDelete(skey:string){
    if(confirm("desea borrar el articulo?")){
    this.articuloService.deleteArticulo(skey)
    this.toastr.success("Operacion Exitosa","El articulo ha sido eliminado");}
  }

}
