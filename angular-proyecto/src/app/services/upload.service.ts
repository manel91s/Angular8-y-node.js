import {Injectable} from '@angular/core';
import {Global} from './global';

@Injectable()

export class UploadService {
    public url: string;

    constructor() {
        this.url = Global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files:Array<File>, name: string) {
        //resolve es que la promesa se a resuelto
        //Reject es que la promesa no se a resuelto
        return new Promise(function(resolve,reject){
            //Crear formulario en un objeto
            var formData = new FormData;
            //sinonimo de ajax (xhr)
            //objeto de peticiones asincorono de javascript
            var xhr = new XMLHttpRequest();

            //Recorrer todos los archivos que nos llegan 
            for(var i=0; i<files.length;i++) {
                //injectar el nombre, todos los campos del array de cada archivo, y los nombres.
                formData.append(name,files[i],files[i].name);
            }

            //peticion ajax
            xhr.onreadystatechange = function() {
                //Si el readyState es = 4 
                if(xhr.readyState == 4) {
        //Entonces si status es 200 (estado realizo con exito) convertir la respuesta en JSON
                    if(xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }else{
                        //Si no resulta con existo que retorne el error (reject) de la promesa
                        reject(xhr.response);
                    }
                }
            }

            //Peticion AJAX POR POST, a la url indicada, y true para que realize la peticion
            xhr.open('POST', url, true);
            //Con el metodo send tambien enviamos todo el formulario del nombre de las iamgenes que llegan y con el bucle recorremos mas arriba.
            xhr.send(formData);
        })

    }
}

