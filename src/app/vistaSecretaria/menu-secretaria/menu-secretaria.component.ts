import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-secretaria',
  templateUrl: './menu-secretaria.component.html',
  styleUrls: ['./menu-secretaria.component.css']
})
export class MenuSecretariaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirCita(){
    this.router.navigate(['gencita']);
  }

  NuevaMasc(){
    this.router.navigate(['nuemasc']);
  }

  getCitas(){
    this.router.navigate(['menVet']);
  }
}
