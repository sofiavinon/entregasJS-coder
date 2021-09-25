
const nombreUsuario1 = "sofia"
const nombreUsuario2 = "julian"
const nombreUsuario3 = "tomas"

let nombreDinamico = prompt("Decime tu nombre de usuario").toLowerCase();



if((nombreDinamico === nombreUsuario1) || (nombreDinamico === nombreUsuario2) || (nombreDinamico === nombreUsuario3)){
    alert(`Hola ${nombreDinamico}!`);

    
    let passAdmin = "admin";
    let passAlumno = "alumno";
    let cont = prompt("Ingresa tu contraseña").toLocaleLowerCase();
    let intentos = 5;

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
} else {
    alert(`${nombreDinamico} no estas registrado`)
}

