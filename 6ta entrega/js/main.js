class Cursos {

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

}

//Creo el array
let listaCursos = [];

listaCursos.push(new Cursos("Marketing digital", 1000));
listaCursos.push(new Cursos("Marketing digital a distancia", 750));
listaCursos.push(new Cursos("Desarrollo web", 1500));
listaCursos.push(new Cursos("JavaScript", 1700));
listaCursos.push(new Cursos("Google Ads", 850));
listaCursos.push(new Cursos("Facebook Ads", 800));

const agregarCursos = () => {

    let nombre = prompt("Ingresa el nombre del curso");
    let precio = Number(prompt("Ingresa el precio del curso"));

    let curso = new Cursos (nombre, precio);
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


//Buscador
let search = prompt("Qué curso queres buscar?").toLocaleLowerCase();
let buscarCursos = listaCursos.filter(obj => obj.nombre === search);
console.log(buscarCursos);