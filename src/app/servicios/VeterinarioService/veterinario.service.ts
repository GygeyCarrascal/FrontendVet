import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) { }

  getVeterinarios(): Observable<any>{
    return this.http.get('http://localhost:3000/api/vet/');
  }
}
