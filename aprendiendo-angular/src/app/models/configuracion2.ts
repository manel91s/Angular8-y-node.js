
/* Creamos y exportamos una clase con atributos y asignamos al constructor 
los parametros que se crearan en el objeto*/

/*Posteriormente lo importaremos en el componente de formula1*/
export class opciones2 {

    public nombre:string;
    public apellidos:string;
    public calle:string;
    public numero:number;
    

    constructor(nam,a,c,num) {
        this.nombre=nam;
        this.apellidos=a;
        this.calle=c;
        this.numero=num;
        
    }

}