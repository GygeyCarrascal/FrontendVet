import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http: HttpClient) { }

  getCitasdehoy(): Observable<any>{
    return this.http.get('http://localhost:3000/api/masc/');
  }

  buscarpordni(dni): Observable<any>{     
    return this.http.get('http://localhost:3000/api/masc/'+dni);
}

  crearMascota(masc:mascota): Observable<any>{
    return  this.http.post<mascota>('http://localhost:3000/api/masc/',masc);    
  }

}

interface mascota {
  id_masc:string,
  nombremasc:string,
  dni_duen:number,
  raza:string,
  añodenac:number,
  alergias:string
};
