
//Importar injectable para inyectar los servicios en otras clases.
import {Injectable} from '@angular/core';
//Modulos para permitir hacer peticiones ajax a un servicio externo y poder modificar las cabeceras de esas peticiones
import {HttpClient, HttpHeaders} from '@angular/common/http';
//importar los observable recojen la informacion que nos devuelve el apirest
import {Observable} from 'rxjs/Observable';

//Añadimos el decorador del injectabl
@Injectable()
export class PeticionesService {

    //Creamos el atributo url 
    public url: string;

    
    constructor(
        //Creamos el atributo _http y le asignamos el modulo del servicio.
        public _http: HttpClient
    ) {

        //llamamos al tributo url y le asignamos la url raiz del servicio restful
        this.url = "https://reqres.in/";
    }

    //Creamos el metodo getUser que esto sera un metodo de tipo observable
    // **Observable recoge la informacion de la peticion**
    getUser(userId):Observable<any> {
        
        //retornamos el _http con el metodo get y toda la url del servicio rest.
        return this._http.get(this.url+'api/users/'+userId);
    }

    //Recibimos el parametro que contiene el objeto con los datos del formulario
    addUser(user):Observable<any> {
        //Creamos una variable que contendra los datos del objeto en formato JSON (texto)
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        //Ejecutar y retornar la peticion POST con los nuevos datos del formulario.
        return this._http.post(this.url+'api/users', params, {headers:headers});
    }
} 

