import { Component, OnInit } from '@angular/core';

//importamos el servicio externo donde se encuentra la llamada al servicio rest
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],

  //cargamos el servicio en providers.
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  //Creamos el atributo user para despues asignar el objeto que contiene los usuarios del servicio rest desde la respuesta.
  public user: any;
  public userId: any;
  public new_user: any;
  public guardar_nuevoUsuario: any;

  constructor(
    //creamos el atributo que contendra el tipo del objeto peticionesService dentro del constructor.
    private _peticionesService:PeticionesService
  ) { 

    //Creamos el atributo userId para despues pasarle por parametro al metodo get de la llamada
    this.userId = 1;

    //Creamos el atributo new user que contendra los datos json para crear el usuario el servicio rest
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit() {
    this.cargaUsuario();
   
  }
  
  
  cargaUsuario() {
    //Poner a false cada vez que se carga un usuario, cuando llege a la respuesta se pondra a true y ara el efecto cargando.
    
    this.user = false;
     //llamaos al atributo que contiene el servicio externo y llamamos al metodo getUser que contiene la llamada
    // ** esto recibe el observable de la consulta** (Siempre que se llama al metodo de la consulta de la llamad ajax seguido debe de ir el subscribe) 

    //Le pasamos por parametros el valor del la id del usuario con two way data binding
    this._peticionesService.getUser(this.userId).subscribe(

      //Dentro del subscribe retornara el resultado de la peticion cuando finalize
      result => {
        //asignamos el objeto data que contiene la informacion del usuario al atributo user.
        this.user = result.data;
        console.log(this.user);
      },
      // o retornara un error en caso de que no aiga echo la petición correctamente.
      error => {
        console.log(<any>error);
      }
  );

  }

  onSubmit(form) {

    //llamamos al servicio donde contiene la llamada y le pasamos por parametro el objeto con los datos del formulario al metodo addUser.
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
        //Guardamos la respuesta en el atributo
        this.guardar_nuevoUsuario = response;
        
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
    

  }

}
