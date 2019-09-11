/*
Joel quiere ver el porcentaje de veces que falto a clases,
 el programa recibirá un arreglo de asistencias
  para poder calcular el resultado, 
  cada elemento esta representado por un valor booleano

  True significa que tuvo una falta ese día
*/

const assitencias = [true, true, false, true, true]
let sumaAsistencias = 0

for (let index = 0; index < assitencias.length; index++) {
 //El siguiente IF es una validacion para saber que pasa calabaza, y lo puso Isra
  //  if (sumaAsistencias[index]) {
        sumaAsistencias += assitencias[index]
    
    //(para saber cuanto da cada ciclo en este punto) console.log(sumaAsistencias)
}

const porcentajeAsistencias = sumaAsistencias * 100 / assitencias.length

console.log(porcentajeAsistencias)