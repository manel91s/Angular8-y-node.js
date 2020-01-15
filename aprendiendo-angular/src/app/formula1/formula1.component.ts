import { Component, OnInit } from '@angular/core';
//importamos la clase que emos creado en el modelo configuracion2
import {opciones2} from '../models/configuracion2';
import {opciones} from '../models/configuracion';
import {participantesf1Service} from '../services/participantesF1.service';

@Component({
  selector: 'app-formula1',
  templateUrl: './formula1.component.html',
  styleUrls: ['./formula1.component.css'],
   //Los servicios se cargan en providers, cargamos el servicio para recojer los datos del servicio.
   providers:[participantesf1Service]
})

//implements OnInit si se implementan interfaces se an de declarar en la clase
export class Formula1Component implements OnInit {

  //Creamos un atributo publico que sera un array con todos los atributos de la clase importada
  public coleccion:Array<opciones2>;
  public color:String;
  public fondoColor:String;
  public titulo:String;
  public ruedas:String;
  public soloApellidos:String[];
  public mi_apellido:String;
   
  


  constructor(
    // ***** Todos los servicios que se van a crear se especifican con ' _ ' en los atributos.
   //Añadimos y creamos el atributo con el objeto participantesService en el constructor.
    private _participantesService: participantesf1Service
  ) {
    
    this.ruedas='16-pulgadas';
    this.fondoColor='yellow';
    this.soloApellidos = new Array();
    this.titulo = 'Participantes de Formula 1';
    this.color = opciones.color2;
    
   }


   //ngOnInit hace acciones nada mas cargar la pagina
  ngOnInit() {
  

     //llamamos al servicio para ver si nos devuelve el array
     console.log(this._participantesService.getZapatillas());
     //Utilizamos el servicio
     this.coleccion = this._participantesService.getZapatillas();

     //Lanzamos un alert para comprobar si el metodo del servicio funciona
     alert(this._participantesService.getTexto());
   
    
  }

  alertRuedas() {
    alert(this.ruedas);
  } 

  addApellido() {
    this.soloApellidos.push(this.mi_apellido);
  }

  getApellido() {
    alert(this.mi_apellido);
  }

  borrarApellido(i) {
    this.soloApellidos.splice(i,1);
  }

 
  //Creamos un metodo para solo recoger apellidos unicos de todos los que hay en el array
  recorrerApellidos() {

    //Recorremos todos los arrays de coleccion con el metodo de foreach
    this.coleccion.forEach((apellidoUnico,index) =>{
    //Si el valor del array coleccion.apellidos no se encuentra en el array soloApellidos insertalo si no, no.
    if(this.soloApellidos.indexOf(apellidoUnico.apellidos)<0) {
      this.soloApellidos.push(apellidoUnico.apellidos);
      
    }
 
    });

    //Sacamos en consola el array solo apellidos
    console.log(this.soloApellidos);

    
  }

}

