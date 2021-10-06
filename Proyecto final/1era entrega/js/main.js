function tomarDatos() {
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingresa tu apellido");
    let edad = Number(prompt("Ingresa tu edad"));
    
    alert(mostrarDatos(nombre, apellido, edad));
}

function mostrarDatos(nombre, apellido, edad){
    let datos = `Tu nombre y apellido son: ${nombre} ${apellido} y tu edad es ${edad}`;
    return datos;
}

tomarDatos();

function pedirPass() {
    
    let cont = prompt("Ingresa tu contraseña").toLocaleLowerCase();
    let intentos = 5;
    let passAdmin = "admin";
    let passAlumno = "alumno";

    if(passAdmin == cont){
        alert("Ya podes administrar el sistema");
    } else if(passAlumno == cont){
        alert("Bienvenido alumno")
    } else {
        while((cont != passAdmin) || (cont != passAlumno) && (intentos > 0)){
            alert(`Contraseña incorrecta, te quedan ${intentos} intentos`);
            intentos--
            cont = prompt("Ingresa tu contraseña").toLocaleLowerCase();
        
            let validar = confirm("Deseas cambiar la contraseña?");
            
            if(validar){
               let newPass = prompt("Ingresa tu nueva contraseña").toLocaleLowerCase();
               alert(`Tu nueva contraseña es ${newPass}`);
               break     
            }
        }
    }

}

pedirPass();

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

let listaCursos = [];

listaCursos.push(new Cursos ("Marketing","Online", 1000,100));
listaCursos.push(new Cursos ("Desarollo web","Presencial", 1500,50));
listaCursos.push(new Cursos ("JavaScript","Online", 1700,100));
listaCursos.push(new Cursos ("Google Ads","Presencial", 850,50));



const agregarCursos = () => {

    let nombreC = prompt("Ingresa el nombre del curso");
    let modalidadC = prompt("Ingresa la modalidad del curso");
    let precioC = Number(prompt("Ingresa el precio del curso"));
    let disponibilidadC = Number(prompt("Ingresa la disponibilidad del curso"));


    let curso = new Cursos (nombreC, modalidadC, precioC, disponibilidadC);
    listaCursos.push(curso);

}


//Ordenar por precio de menor a mayor
listaCursos.sort((a,b) => {
    if(a.precio > b.precio){
        return 1;
    }if(a.precio < b.precio){
        return -1;
    }
    return 0;
})

