/*
Joel tiene que informar a sus alumnos quienes tienen que repetir curso, 
el tiene una lista de alumnos, 
cada alumno tiene un nombre y una lista de calificaciones 
que se tienen que promediar para saber si el alumno está aprobado, 
el promedio mínimo para aprobar es 6. 
Haz un algoritmo que escriba el nombre de los alumnos que no aprobaron.
*/


const alumnos = [{
    nombre: "Joel",
    calificaciones: [7, 9]
}, {
    nombre: "Santiago",
    calificaciones: [5, 6]
}, {
    nombre: "Sarah",
    calificaciones: [10, 9]
}
]

for (let index = 0; index < alumnos.length; index++) {
    if (alumnos[index].calificaciones) {

        const promedioCalificaciones = ((alumnos[index].calificaciones[0]
            + alumnos[index].calificaciones[1]) / 2);


        if (promedioCalificaciones >= 6) {

            console.log(alumnos[index].nombre)
        }

    }

}


//

/*

for (let index = 0; index < alumnos.length; index++) {
    if (!alumnos[index].presente) {
        console.log(alumnos[index].nombre)
        // promedio
        // console.log(alumno)
    }
}

*/