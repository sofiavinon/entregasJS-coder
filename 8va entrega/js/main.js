class c{
    constructor(nombre, mail, consultaUsuario){
        this.nombre = nombre;
        this.mail = mail;
        this.consultaUsuario = consultaUsuario;
    }
}


const mostrarConsulta = () => {

const consulta = new c({
    nombre : document.getElementById("name").value,
    email : document.getElementById("email").value,
    comentario : document.getElementById("coment").value,
})

    const consultaP = document.createElement("div");

    const consultaN = document.createElement("p");
    consultaN.textContent = consulta.nombre;
    consultaP.appendChild(consultaN);

    const consultaM = document.createElement("p");
    consultaM.textContent = consulta.mail;
    consultaP.appendChild(consultaM);

    const consultaU = document.createElement("p");
    consultaU.textContent = consulta.consultaUsuario;
    consultaP.appendChild(consultaU);

    document.getElementById("ingresoUs").appendChild(consultaP);
    

    return consulta;

}


document.getElementById("botonConsulta").addEventListener("click", () => {
    mostrarConsulta();
})