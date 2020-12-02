import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  getCitasdehoy(): Observable<any>{
    return this.http.get('http://localhost:3000/api/cita/');
  }

  generarCita(diagnostico:diagnostico): Observable<any>{
    return  this.http.post<diagnostico>('http://localhost:3000/api/cita/',diagnostico);    
  }
}

interface diagnostico {
  fecha:string,
  hora:string,
  dni_Vet:number,
  dni_Duenio:number,
  id_Mascota:number,
  Diagdesc:string,
  Tratamdesc:string,
  id_Cita:number   
};
