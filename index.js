// importar modulos
const { buscarCurso, listadoCursos, infoCurso } = require("./cursos.js");
const fs = require('fs');

// solicitar datos con argv
const cursos = {
    operacion: {
        demand: true,
        alias: 'o'
    },
}

const datos = {
    operacion: {
        demand: true,
        alias: 'o'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
    id: {
        demand: true,
        alias: 'i'
    }
}

const argv = require('yargs')
    .command('consulta', 'Consulta de datos', cursos)
    .command('inscribir', 'Proceso de inscripción de curso', datos)
    .argv;

// Operaciones
if (argv.o == 1) {
    // listar cursos
    listadoCursos();
    
} else if (argv.o == 2) {
    // buscar curso
    console.log("Sr(a) " + argv.n + " el resultado de su busqueda es: ");
    console.log(buscarCurso(argv.i));

    //Validar si el curso fue encontrado
    if (buscarCurso(argv.i) != "Curso no encontrado") {
        // Generar archivo
        let crearArchivo = () => {
            text = "Información del estudiante" + "\n" +
                "   Identificación: " + argv.cedula + "\n" +
                "   Nombre: " + argv.nombre + "\n" +
                "Información del Curso " + "\n" +
                "   Id: " + buscarCurso(argv.i).id + "\n" +
                "   Nombre: " + buscarCurso(argv.i).nombre + "\n" +
                "   Duración: " + buscarCurso(argv.i).duracion + "\n" +
                "   Valor: " + buscarCurso(argv.i).valor
                ;

            fs.writeFile("inscripcion.txt", text, (error) => {
                if (error) throw (error);
                console.log("Archivo generado");
            });
        }
        crearArchivo();
    }
} else {
    console.log("Opción no valida, intentar con 1 (consulta) o 2(inscripción). Favor volver a intentarlo");
}