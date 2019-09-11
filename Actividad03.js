/*
Paco no estudió mucho para sus últimos exámenes,
 quiere saber cuántos exámenes tendrá que realizar de nuevo,
  el programa recibirá un arreglo de calificaciones para poder calcular el resultado
*/

const calificaciones = [6, 8, 5, 10, 7]
let sumaExamenesReprobados = 0;

for (let index = 0; index < calificaciones.length; index++) {
    if (calificaciones[index] <= 6) {
        sumaExamenesReprobados += 1
    }

}
console.log(sumaExamenesReprobados)
       
    


