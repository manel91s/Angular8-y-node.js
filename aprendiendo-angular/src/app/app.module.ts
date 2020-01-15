import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Importar el modulo de forms para poder utilizar 
el two data binding con la directiva ngModule*/
import {FormsModule} from '@angular/forms';

//importar el modulo routing y el servicio approuterproviders para despues cargarlo
import {routing, appRoutingProviders} from './app.routing';

//importar el modulo httpclient para las peticiones ajax en servicios externos
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
//importar siempre el objeto del componente del archivo componente para cargarlo
import { AppComponentCoches} from './coches/coches.component';
import { AppComponentMotos } from './motos/motos.component';
import { Formula1Component } from './formula1/formula1.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  //En declaration iran los nombres de los componentes, pipets y directivas
  declarations: [
    AppComponent,
    AppComponentCoches,
    AppComponentMotos,
    Formula1Component,
    HomeComponent,
    ExternoComponent,
    ContactoComponent
  ],
  //Aqui los modulos
  imports: [
    BrowserModule,
    //Cargar formsModule ya que se trata de un modulo
    FormsModule,
    //Cargar el routing 
    routing,
    //cargar el modulo http
    HttpClientModule
  ],
  //Aqui los servicios
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
