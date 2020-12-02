import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http: HttpClient) { }

  buscarpordni(dni): Observable<any>{     
    return this.http.get('http://localhost:3000/api/masc/'+dni);
}

}
