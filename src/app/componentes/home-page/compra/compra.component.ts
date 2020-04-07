import { Respuesta } from './../../../models/respuesta';
import { CarshopService } from './../../../servicios/carshop.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NotificacionService } from 'src/app/servicios/notificacion.service';
import { ArticuloService } from 'src/app/servicios/articulo.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  pedido:number=1;
  name:string;
  res:string[];
  public subtotal:number=0;
  constructor(private articuloService: ArticuloService,
    private dialogReg: MatDialogRef<CompraComponent>,
    private notif: NotificacionService,private VentanaFlot: MatDialog,
    private carshop:CarshopService) { }

  ngOnInit() {
    this.articuloService.getArticulo();
    this.articuloService.selectActiculo.pedido=1;
    this.onChange()
  }
  incr(){
    if(this.pedido< this.articuloService.selectActiculo.disponible)
    this.pedido=this.pedido + 1
  }

  decr(){
    if(this.pedido> 1)
    this.pedido=this.pedido - 1
  }

  onChange(){

    if(this.pedido > this.articuloService.selectActiculo.disponible)
    this.pedido = this.articuloService.selectActiculo.disponible
  }
  comprar(){

    this.articuloService.selectActiculo.pedido= this.pedido
    this.res=this.carshop.addItem(this.articuloService.selectActiculo);


    if(this.res[2]!="")
    this.pedido=Number(this.res[2])
    if(this.res[0]=="OK")
    this.dialogReg.close();
    this.notif.success(this.res[1], "OK");
  }
}
