
//importar el componente del core 
import { Component } from '@angular/core';


//Crear etiqueta Component
@Component({
    //Selector etiqueta que vamos a utilizar para que muestre la vista
    selector: 'coches',
    //ruta de la vista para que cargue el componente
    templateUrl: './coches.component.html',
    //ruta del css para que cargue el componente
    styleUrls: ['./coches.component.css']

})

//Exportar el objeto para luego poder importarlo en app.module.ts
export class AppComponentCoches {

    //**binding por interpolación para printarlo en las vistas */
    public title:string;

    constructor() {

        this.title='Los mejores coches del mundo!';
    }

    
    
}