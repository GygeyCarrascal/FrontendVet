import { Component, OnInit } from '@angular/core';

import {CitaService} from '../../servicios/CitaService/cita.service';
@Component({
  selector: 'app-menu-veterinario',
  templateUrl: './menu-veterinario.component.html',
  styleUrls: ['./menu-veterinario.component.css']
})
export class MenuVeterinarioComponent implements OnInit {

  Citas=[]
  constructor(private CitaService:CitaService) { }

  ngOnInit(): void {
    this.obtenercitasdehoy()
  }

  
  diagnostico={
    fecha:"",
    hora:"",
    id_Cita:"",
    dni_Vet:"",
    estado:"",
    dni_Duenio:"",
    id_Mascota:"",
    Diagdesc:"",
    tratamdesc:""    
  }

  obtenercitasdehoy(){
    this.CitaService.getCitasdehoy().subscribe(data => {
      this.Citas = data.empl;
      console.log(this.Citas);
    });
  }

  buscarmascota(){}
}

