import {Component} from '@angular/core';

@Component({
    selector: 'motos',
    templateUrl: './motos.component.html'
})

export class AppComponentMotos {

    public titulo:string

    constructor() { 
        this.titulo="Las mejores motos";

    }

    
}

