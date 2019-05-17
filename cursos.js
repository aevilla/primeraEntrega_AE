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
    return cursos.find(cursos => cursos.id == id)
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
    }, 2000);
}

module.exports = {
    cursos,
    buscarCurso,
    listadoCursos
}