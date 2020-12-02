import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app.routing'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

////componentes

import { MenuSecretariaComponent } from './vistaSecretaria/menu-secretaria/menu-secretaria.component';
import { MenuVeterinarioComponent } from './vistaSecretaria/menu-veterinario/menu-veterinario.component';
import { GenerarCitaComponent } from './vistaSecretaria/generar-cita/generar-cita.component';
import { AnadirMascotaComponent } from './vistaSecretaria/anadir-mascota/anadir-mascota.component';
import { NavAppComponent } from './otros/nav-app/nav-app.component';
/////componentes

////servicios///
import { CitaService } from './servicios/CitaService/cita.service';
import { DuennoService } from './servicios/DuennoService/duenno.service';
import { MascotasService } from './servicios/MascotaService/mascotas.service';
import { VeterinarioService } from './servicios/VeterinarioService/veterinario.service';
import { DialogComponent } from './vistaSecretaria/anadir-mascota/dialog/dialog.component';

///servicios///
@NgModule({
  declarations: [
    AppComponent,
    MenuSecretariaComponent,
    MenuVeterinarioComponent,
    GenerarCitaComponent,
    AnadirMascotaComponent,
    NavAppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [CitaService,VeterinarioService,MascotasService,DuennoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
