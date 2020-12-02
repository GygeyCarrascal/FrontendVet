import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuSecretariaComponent } from './vistaSecretaria/menu-secretaria/menu-secretaria.component';
import { MenuVeterinarioComponent } from './vistaSecretaria/menu-veterinario/menu-veterinario.component';
import { GenerarCitaComponent } from './vistaSecretaria/generar-cita/generar-cita.component';
import { AnadirMascotaComponent } from './vistaSecretaria/anadir-mascota/anadir-mascota.component';

const app_routes: Routes=[
    { path:'index', component:MenuSecretariaComponent},
    { path:'menSec', component:MenuSecretariaComponent},
    { path:'menVet', component:MenuVeterinarioComponent},
    { path:'gencita', component: GenerarCitaComponent},
    { path:'nuemasc', component:AnadirMascotaComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
  })

  export class  AppRoutingModule { }