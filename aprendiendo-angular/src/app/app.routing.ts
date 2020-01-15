//Importar modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { HomeComponent } from './home/home.component';
import {AppComponentCoches} from './coches/coches.component';
import {Formula1Component} from './formula1/formula1.component';
import {AppComponentMotos} from './motos/motos.component';
import {ExternoComponent} from './externo/externo.component';
import {ContactoComponent} from './contacto/contacto.component';


//Array de rutas
const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'coches', component:AppComponentCoches},
    {path: 'formula1', component:Formula1Component},
    {path: 'formula1/:nombre', component:Formula1Component},
    {path: 'motos', component:AppComponentMotos},
    {path: 'externo', component:ExternoComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: '**', component:HomeComponent},
];

/*Para que funcionen las rutas se ha de utilizar la etiqueta (directiva) router-outlet></router-outlet> 
en la vista del componente app.component.html */ 

// Exportar el modulo del rotuer
export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

