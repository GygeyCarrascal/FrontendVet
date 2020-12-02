import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {VeterinarioService} from '../../servicios/VeterinarioService/veterinario.service';
import {MascotasService} from '../../servicios/MascotaService/mascotas.service';
import {CitaService} from '../../servicios/CitaService/cita.service';

@Component({
  selector: 'app-generar-cita',
  templateUrl: './generar-cita.component.html',
  styleUrls: ['./generar-cita.component.css']
})
export class GenerarCitaComponent implements OnInit {

  fecha1:Date;
  mostrar1masc=false;
  mostrar2mas=false;
  Veterinarios=[]
  vetSelec=""
  mascSelec=""
  masc=[]
  Citas=[]
  hora=""
  dni_Duenio=""
  id_masc:any

  constructor(private router: Router,
              private VetService:VeterinarioService,
              private mascotaServ:MascotasService,
              private citaServ:CitaService) { }

  ngOnInit(): void {
    this.listarVeterinario()
    this.obtenercitasdehoy()
  }

  listarVeterinario(){
    this.VetService.getVeterinarios().subscribe(data => {
      this.Veterinarios = data.empl;
      console.log(this.Veterinarios);
    });

  }

  buscarDueno(){
    this.buscarMascotaporDueno()
  }

  buscarMascotaporDueno(){    
    this.mascotaServ.buscarpordni(this.dni_Duenio).subscribe(data => {      
      this.masc = data.mascota;
      this.mostrar2mas=true;
    });
  }

   
  crearCita(){      
  const diagnostico={
    fecha:this.fecha1.toString(),
    hora:this.hora,
    dni_Vet:parseInt(this.vetSelec),
    dni_Duenio:parseInt(this.dni_Duenio),
    id_Mascota:parseInt(this.mascSelec),
    Diagdesc:"",
    Tratamdesc:"" ,
    id_Cita:this.Citas.length+1
  }
    this.citaServ.generarCita(diagnostico).subscribe(data => {      
     console.log(data);
    });
  }

  
  obtenercitasdehoy(){
    this.citaServ.getCitasdehoy().subscribe(data => {
      this.Citas = data.empl;
      console.log(this.Citas);
      this.limpiar()
    });
  }


  volver(){
    this.router.navigate(['menSec']);
  }

  limpiar(){
    this.hora="",
    this.dni_Duenio="",
    this.vetSelec="",
    this.dni_Duenio="",
    this.mascSelec=""
  }
  
}