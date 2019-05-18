Autor: Ariel Evilla
Descripción: Primera entrega curso Node.js

Escenarios posibles de ejecución

Ejecución:
    La implentación se basa en dos operaciones, "Incribir" y "Consultar", que presentan 1 y 2, respectivamente. En los siguientes escenarios da ejemplos de ejecución

Escenario#1 - Selección no valida:
    Ejecución: $ node index consulta -o=3 
    Resultado: Opción no valida, intentar con 1 (consulta) o 2(inscripción). Favor volver a intentarlo

Escenario#2 - Consultar información de cursos disponibles
    Ejecución: $ node index consulta -o=1
    Resultado: lista la información de los cursos en el array "cursos"

Escenario#3 - Inscripción curso innexistente
    Ejecución: node index inscribir -o=2 -n="Ariel Evilla" -cedula="1045716300" -i="101"
    Resultado: se muestra mensaje que el curso no fue encontrado y genera el archivo

Escenario#4 - Inscripción curso existente
    Ejecución: node index inscribir -o=2 -n="Ariel Evilla" -cedula="1045716300" -i="100"
    Resultado: se muestra mensaje que el curso no fue encontrado y genera el archivo