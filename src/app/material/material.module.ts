
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import * as Material from '@angular/material'
import { MatTableDataSource, MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatSnackBarModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
    Material.MatDialogModule,
    Material.MatCardModule,
    Material.MatFormFieldModule
  ],
  exports:[
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatSnackBarModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
    Material.MatDialogModule,
    Material.MatCardModule,
    Material.MatFormFieldModule
  ]
})
export class MaterialModule { }
