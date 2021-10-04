function Personas (nombre, apellido, edad, mail) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.mail = mail;
}

const crearPersona = () => {

    let nombre = prompt("Ingresa tu nombre")
    let apellido = prompt("Ingresa tu apellido")
    let edad = prompt("Ingresa tu edad")
    let mail = prompt("Ingresa tu mail")

    const sofia = new Personas(nombre, apellido, edad,mail);
    console.log(sofia);
} 

crearPersona();

class Cursos {

    constructor(nombreC, modalidadC, precioC, disponibilidadC){
        this.nombre = nombreC;
        this.modalidad = modalidadC;
        this.precio = precioC;
        this.disponibilidad = disponibilidadC;
    }

    comprar () {
        if(this.disponibilidad <= 0){
            console.log("No hay más cupos");
        } else{
            this.disponibilidad = this.disponibilidad - 1
            console.log("Compraste el siguiente curso" + this.nombre)
        }   
    }

    

}

const curso1 = new Cursos ("Marketing","Online", 1000,100)
const curso2 = new Cursos ("Desarollo web","Presencial", 15000,50)


curso1.comprar();
curso2.comprar();