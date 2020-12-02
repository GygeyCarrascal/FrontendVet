import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DuennoService {

  constructor(private http: HttpClient) { }

  generarCita(duenno:duenno): Observable<any>{
    return  this.http.post<duenno>('http://localhost:3000/api/due/',duenno);    
  }

}

interface duenno {
  dni:number,
  nombre:string,
  apellido:string,
  tele:number,
  tele2:number
};
