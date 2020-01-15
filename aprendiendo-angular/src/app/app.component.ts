import { Component, OnInit } from '@angular/core';
//Importamos el objeto exportado de la carpeta modelo y lo asignamos a una propiedad en el constructor
import {opciones} from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
   public title:string;
   //Creamos la propiedad color para posteriormente asignarle el valor en el constructor
   public color:string;
   constructor() {
     this.title='Bienvenido al curso de angular'
     //Asignamos el valor en el constructor
     this.color=opciones.color;
     
   }
   

}
