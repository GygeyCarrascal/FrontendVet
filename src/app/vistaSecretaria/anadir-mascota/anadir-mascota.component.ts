import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component'
import {MascotasService } from './../../servicios/MascotaService/mascotas.service'

import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-anadir-mascota',
  templateUrl: './anadir-mascota.component.html',
  styleUrls: ['./anadir-mascota.component.css']
})
export class AnadirMascotaComponent implements OnInit {
  
  dni_duenno=""
  mascnombre=""
  annonac=""
  alergia=""
  dnidue=""
  raza=""
  masc=[]
  favoriteSeason:any

  constructor(public dialog: MatDialog,
    public router:Router,
    private mascService:MascotasService,
    private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
      data: {duenno: this.dnidue}
    });

    dialogRef.afterClosed().subscribe(result => {
      /*console.log('The dialog was closed');
      this.animal = result;*/
    });
  }

  volver(){
    this.router.navigate(['menSec']);
  }

  guardarmascota(){
    this.obtenercitasdehoy()
    const id=this.masc.length+1;
    const nuevo={
      id_masc:id.toString() ,
      nombremasc:this.mascnombre,
      dni_duen:parseInt(this.dni_duenno),
      raza:this.raza,
      añodenac:parseInt(this.annonac),
      alergias:this.alergia
    }
    console.log(nuevo)
    this.mascService.crearMascota(nuevo).subscribe(data => {      
      console.log(data);
      this.limpiar();
     });
  }

  obtenercitasdehoy(){
    this.mascService.getCitasdehoy().subscribe(data => {
      this.masc = data.mascota;
    });
  }

  limpiar(){
   this.dni_duenno=""
  this.mascnombre=""
  this.annonac=""
  this.alergia=""
  this.dnidue=""
  this.raza=""
  }

}