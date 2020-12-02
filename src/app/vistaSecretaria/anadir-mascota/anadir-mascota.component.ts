import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component'

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
  favoriteSeason:any

  constructor(public dialog: MatDialog,
    public router:Router) { }


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

}

