export class ContactoUsuario{

    public nombre:string;
    public apellidos:string;
    public email:string;
    public mensaje:string;

    constructor(n,a,e,m) {
        this.nombre=n;
        this.apellidos=a;
        this.email=e;
        this.mensaje=m;
    }
}