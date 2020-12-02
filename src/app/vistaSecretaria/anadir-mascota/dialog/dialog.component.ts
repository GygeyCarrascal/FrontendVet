import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DuennoService } from '../../../servicios/DuennoService/duenno.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    private dueService:DuennoService,
   /* @Inject(MAT_DIALOG_DATA)public data: DialogData*/) { }

  ngOnInit(): void {
  }

  dni=""
  nombre=""
  apellido=""
  tel1=""
  tel2=""


  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(){
    const nuevo={
      dni:parseInt(this.dni) ,
      nombre:this.nombre,
      apellido:this.apellido,
      tele:parseInt(this.tel1),
      tele2:parseInt(this.tel2)
    }
 
    this.dueService.generarCita(nuevo).subscribe(data => {      
      console.log(data);
     });

  }
}

