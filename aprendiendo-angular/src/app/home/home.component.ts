import { Component, OnInit } from '@angular/core';
//Importamos los modulos de redireccion de rutas y tambien para poder pasar parametros por url.
import { Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  constructor(
   
    //Esto obliga a añadirlos en el constructor para que funcione las modalidades de rutas que enmos importado.
    private _route:ActivatedRoute,
    private _router:Router,

  ) { }

  ngOnInit() {

   
  }

  redirigir() {
    //Redireccionar al proyecto formula1 con navigate.
    this._router.navigate(['/formula1']);
  }

}
