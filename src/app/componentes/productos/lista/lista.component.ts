import { ArticuloComponent } from './../articulo/articulo.component';
import { CarshopService } from './../../../servicios/carshop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticuloService } from "../../../servicios/articulo.service";


import { Producto } from "../../../models/producto";
import { ToastrService} from "ngx-toastr";
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig} from '@angular/material';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  productList: Producto[];
  constructor(private articuloService: ArticuloService, private carshop: CarshopService,
             private toastr: ToastrService, private VentanaFlot: MatDialog
    ) { }
    array = [];
    searchKey:string;
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[]= ["nombre", "descripcion", "precio", "disponible", "editar", "borrar"]
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {

    this.articuloService.getArticulo().snapshotChanges().subscribe(
      list =>{
        let array = list.map( item => {
          return {
            skey: item.key,
            ...item.payload.val()
          };
        });
        this.dataSource= new MatTableDataSource(array);
      });


    /*this.articuloService.getArticulo()
      .snapshotChanges()
      .subscribe(item => {
        this.productList=[];
        item.forEach(element =>{
          let x = element.payload.toJSON();
          x["skey"] = element.key;
          this.productList.push(x as Producto);

        });
      });//*/
  }

  onCreate(){
    const dialoConfig = new MatDialogConfig();
    dialoConfig.disableClose= true;
    dialoConfig.autoFocus= true;
    this.VentanaFlot.open(ArticuloComponent);
  }

  onSearchClear(){
    this.searchKey =""
    this.aplicarFiltro();
  }

  aplicarFiltro(){
    this.dataSource.filter=this.searchKey.trim().toLowerCase();
  }
  onEdit(articulo: Producto){

    this.articuloService.selectActiculo = Object.assign({}, articulo);

    const dialoConfig = new MatDialogConfig();
    dialoConfig.disableClose= true;
    dialoConfig.autoFocus= true;
    this.VentanaFlot.open(ArticuloComponent);

  }

  onDelete(skey:string){
    if(confirm("desea borrar el articulo?")){
    this.articuloService.deleteArticulo(skey)

  }
  }

}
