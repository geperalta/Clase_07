/*
Joel recibió una lista de las evaluaciones 
que hicieron sus alumnos, las calificaciones son de 1 a 5,
para poder aprobar Joel necesita obtener una calificación de 4, 
crea un programa que evalúe una lista de calificaciones 
y le diga si esta aprobado o no
*/

const calificaciones = [4, 4, 4]
let sumaCalificaciones = 0

for (let indice = 0; indice < calificaciones.length; indice++) {
    sumaCalificaciones += calificaciones[indice]
}

const promedio = sumaCalificaciones / calificaciones.length

if (promedio >= 4) {
    console.log("Aprobado")
} else {console.log("Reprobado")
}