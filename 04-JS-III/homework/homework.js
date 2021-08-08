// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var a=array.length;
  return array[a-1]; 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var tamaño=array.length;
  return tamaño;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var a=0;a<array.length;a++) {
   array[a]++;
      
    }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena='';
  for (var a=0;a<palabras.length;a++) {
    if(palabras.length-1===a){
        cadena=cadena+palabras[a];
      }
    else{
      cadena=cadena+palabras[a]+' ';
    }
    
  }
  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var bandera='';
  for(var a=0;a<array.length;a++){
    if(array[a]===elemento){
      bandera='entro';
    }
  }
    if(bandera==='entro'){
      return true;
    }
    else{
      return false;
    }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for(var a=0;a<numeros.length;a++){
    suma=numeros[a]+suma;
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=0;
  var numero=resultadosTest.length;  
    for(var a=0;a<resultadosTest.length;a++){
      promedio=promedio+resultadosTest[a];
      }
      promedio=promedio/numero;
      return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mgrande=0;
  for (var a=0;a<numeros.length;a++) {
    if (numeros[a]>=mgrande) {
      mgrande=numeros[a];
    }
  }
  return mgrande;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  var array=[];
  for(var a=0;a<11;a++){
      array.push(6*a);
      //array[a]=6*a; segunda opcion 
  }  
  return array;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicar=1;
  if(arguments.length===1){
    return arguments[0];}
  if(arguments.length===0){
    return 0;}
  for(var a=0;a<arguments.length;a++){
    multiplicar=arguments[a]*multiplicar; }
  return multiplicar;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador=0;
  for(var a=0;a<arreglo.length;a++)
     {
       if(arreglo[a]>18){
        contador++; 
       }
     }
     
     return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí  
  if(numeroDeDia>=2 && numeroDeDia<=6)
    {
      return "Es dia Laboral";} 
  if(numeroDeDia===1 || numeroDeDia===7){
      return "Es fin de semana";  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var bandera='';
  bandera=n+'a';
  if(bandera[0]==='9'){
    return true;
  }
  else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  for(var a=0;a<arreglo.length;a++){
    if(arreglo[0]===arreglo[a]){
      bandera='igual';
    }
    else{
      return false;
    }
  } 
    if(bandera='igual'){
      return true;
    }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var Na=[];
  var e=0,m=0,n=0;
  for(var a=0;a<array.length;a++){
      if(array[a]==='Enero'){
        Na.push(array[a]);
        e++;
      }
      if(array[a]==='Marzo'){
        Na.push(array[a]);
        m++;
      }
      if(array[a]==='Noviembre'){
        Na.push(array[a]);
        n++;
      }
  }
  if(e===0||m===0||n===0){
    return 'No se encontraron los meses pedidos';
  }
  else
  {
    return Na;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var Na=[];
  for(var a=0;a<array.length;a++){
    if(array[a]>100){
      Na.push(array[a]);
    }
  }
  return Na;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var Narray=[];
  sum=numero;
    for (var a=0;a<10;a++) {
      sum=sum+2;
      if (sum===a) break;
      else{
          Narray.push(sum); }
    }
      if(a<10){
        return 'Se interrumpió la ejecución';}
      else{
        return Narray;}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var Narray=[];
  sum=numero;
    for (var a=0;a<10;a++) {
      if (a===5)continue;
      else{
          sum=sum+2;
          Narray.push(sum); }
    }
        return Narray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
