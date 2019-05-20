Autor: Ariel Evilla
Descripción: Primera entrega curso Node.js

Escenarios posibles de ejecución

Escenario#1 - Consulta programas academicos:
    Ejecución: node index.js
    Resultado: Lista todos los cursos disponibles

Escenario#1 - Proceso de inscripción sin enviar valores requeridos
    Ejecución: node index inscribir 
    Resultado: mostrar valores faltantes por diligenciar

Escenario#2 - Inscripción curso innexistente
    Ejecución: node index inscribir -n="Ariel Evilla" -cedula="1045716300" -i="101"
    Resultado: se muestra mensaje que el curso no fue encontrado y genera el archivo

Escenario#4 - Inscripción curso existente
    Ejecución: node index inscribir -n="Ariel Evilla" -cedula="1045716300" -i="100"
    Resultado: se muestra mensaje que el curso no fue encontrado y genera el archivo