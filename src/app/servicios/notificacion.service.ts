import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig={
    duration:3000,
    horizontalPosition: "right",
    verticalPosition:"top",


  }

  success(message: string, action: string){
    this.config['panelClass']=['notification', 'success'] ;
       this.snackBar.open(message, action, this.config);
  }

}
