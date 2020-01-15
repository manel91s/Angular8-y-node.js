
//Importar la clase Injectable para utilizar el servicio y el  decorador 
import {Injectable} from '@angular/core';
//Importamos el modelo de datos de los participantes de formula 1
import {opciones2} from '../models/configuracion2';

@Injectable()
export class participantesf1Service {
    //Creamos el atributo coleccion que contendra el array del modelo de datos de formula1
    public coleccion: Array<opciones2>;

    constructor() {
        //Accedemos al atributo con el constructor y añadimos los valores
        this.coleccion = [
            new opciones2('Manel','Aguilera','Lrrr','15'),
            new opciones2('Aitor','Martinez','la era','20'),
            new opciones2('yusef','Martinez','la era','25'),
            new opciones2('yesi','Martinez','la era','20'),
            new opciones2('Ares','Aguilera','Lrrr','35'),
            new opciones2('Ares','Aguilera','Lrrr','15'),
          ];
    }

    //Comprobaremos que funciona el servicio externo.
    getTexto() {
        return "Hola mundo desde un servicio";
    }
    
    //el metodo getZapatillas devolvera el array de participantes.
    getZapatillas():Array<opciones2> {
        return this.coleccion;
    }
}
