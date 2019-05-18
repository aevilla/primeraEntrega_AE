let cursos = [
    {
        id: 100,
        nombre: 'matematica',
        duracion: 10,
        valor: 500.000
    },
    {
        id: 200,
        nombre: 'fisica',
        duracion: 10,
        valor: 400.000
    },
    {
        id: 300,
        nombre: 'algebra',
        duracion: 10,
        valor: 600.000
    }]

let buscarCurso = (id) => {
    let resultado = cursos.find(cursos => cursos.id == id);
    return (typeof resultado !== "undefined") ? resultado : "Curso no encontrado";
}

let listadoCursos = () => {
    for (var i = 0; i < cursos.length; i += 1) {
        infoCurso(i, cursos[i].id, cursos[i].nombre, cursos[i].duracion, cursos[i].valor);
    }
}

let infoCurso = (indice, id, nombre, duracion, valor) => {
    setTimeout(function () {
        console.log("--------------------Curso#" + indice + "--------------------");
        console.log("ID: " + id + "; Nombre: " + nombre + "; Duración: " + duracion + "; Valor: " + valor);
    }, indice*2000);
}

let getInfoCurso = (id, nombre, duracion, valor) => {
    return ("ID: " + id + "; Nombre: " + nombre + "; Duración: " + duracion + "; Valor: " + valor);
}

module.exports = {
    buscarCurso,
    listadoCursos,
    infoCurso
}