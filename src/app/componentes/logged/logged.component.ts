import { CompraComponent } from './../home-page/compra/compra.component';
import { Component, OnInit } from '@angular/core';
import { ArticuloService } from "../../servicios/articulo.service";
import { Producto } from "../../models/producto";
import { MatDialogConfig, MatDialog } from '@angular/material';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
  productList: Producto[];
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private articuloService: ArticuloService,private VentanaFlot: MatDialog) { }
  filtrarArticulos ='';
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

  onCompra(articulo: Producto){

    this.articuloService.selectActiculo = Object.assign({}, articulo);
    const dialoConfig = new MatDialogConfig();
    dialoConfig.disableClose= true;
    dialoConfig.autoFocus= true;
    this.VentanaFlot.open(CompraComponent);

  }

}
