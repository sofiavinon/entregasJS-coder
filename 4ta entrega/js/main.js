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

