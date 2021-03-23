




//1- Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.

// let regExp = /[B-D]|[F-H]|[J-N]|[P-T]|[V-Z]+/gi;
let palabra  = /([^aeiou])/gi;   
let text = "HolaaaaDaaa";
let match = text.match(palabra);
let vocales , inicio;

if (match != null ){
    inicio =match [0];
    vocales = match [1];
  }

  console.log(`match: ${match}` );
  console.log(`inicio: ${inicio}` );
  console.log(`vocales: ${vocales}` );


  const mySet2 = new Set([[1,2],[3,4]]);
console.log (mySet2);

// *************************************************************************************************************************************
  //2- A veces nos intersa no sólo saber si una cadena cumple un determinado patrón,
  // sino extraer determinadas partes de él. Por ejemplo, si una fecha 
  // está en el formato "27/11/2012" puede interesarnos extraer los números.
  // Una expresión regular que vale para esta cadena puede ser


 
  let numeros  = /(\d\d)\/(\d\d)\/(\d\d\d\d)/;                     
// let regExp1 = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
// let regExp1 = /(/\d+)/g;
                 
let fecha = "27/11/2012";
let match2 = fecha.match(numeros);
let dia , mes , año , ini ;

if (match2 != null ){
    ini =match2 [0];
    dia = match2 [1];
  }

  console.log(`match2: ${match2}` );
  console.log(`dia: ${dia}` );
  //console.log(`mes: ${mes}` );



  //3 Escoger un algoritmo excepto El algoritmo de la Criba de Eratóstenes y utilizar los typed arrays
  // en javascript. Del archivo pdf

  // Algoritmo de Euclides
  // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-47.php


  function Euclid_gcd(a, b) {
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
      return [NaN, NaN, NaN];
    }
    
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
      return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
      return false;
    }
    var signX = (a < 0) ? -1 : 1,
      signY = (b < 0) ? -1 : 1,
      x = 0,
      y = 1,
      u = 1,
      v = 0,
      q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (a !== 0) {
      q = Math.floor(b / a);
      r = b % a;
      m = x - u * q;
      n = y - v * q;
      b = a;
      a = r;
      x = u;
      y = v;
      u = m;
      v = n;
    }
    return [b, signX * x, signY * y];
  }
  
  console.log(Euclid_gcd(2, 4));
 
   
  




/**
 * -4 Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]
 */


//let expRegu  =  /\w{4} tu(')/g;   
let expRegu  = /(["']).*\1/;            // encuentra "'    despues de estos caracteres todo lo terminado en 1   busqueda con comilla   y ponga en la siguiente poscion la comilla simple              
let palabra1 = "'hola tu' tururú";
let match3 = palabra1.match(expRegu);
let uno , inic ;

if (match3 != null ){
    inic =match3 [0];
    uno = match3 [1];
  }

  console.log(`match3: ${match3}` );
  console.log(`inic: ${inic}` );
  console.log(`uno: ${uno}` );



/**
 * 
 * - 5 Programe una expresión regular que de este texto   "papa" tururú" obtenga ["papa", "pa"]
 * 
 * 
 * 
 */

//let expRegu4  =  /[pa][pa]/g;   
let expRegu4  = /(pa){2}/;

let palabra4 = "papa tururú";
let match4 = palabra4.match(expRegu4);
let uno4 , inic4 ;

if (match4 != null ){
    inic4 =match4 [0];
    uno4 = match4 [1];
  }

  console.log(`match4: ${match4}` );
  console.log(`inic4: ${inic4}` );
  console.log(`uno4: ${uno4}` );


 



/***************************************************************************************++
 * 
 * - 6 Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]
 * 
 * 
 * 
 */

let text1 = "java es güay";

console.log(text1.match(/\w{4}/g));





/**
 * 
 * ******************************************************************************************
 * -7 Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]
 * 
 * 
 * let regExp5 = /\d+(?= km)/;   busqueda del caracter 
 */
let text2 = "11 millas 10 km";

 let regExp5 = /\d+(?= km)/; 
console.log(text2.match(regExp5));




console.log(text2.match(/\d0/g));



/**********************************************************************
 * 
 * 
 * 8- Programe una expresión regular que de este texto   "11.22" obtenga [".22"]
 * 
 *  regExp7 = /(?=\.)\.\d+/;
 */

let text3 = "11.22";

console.log(text3.match(/\.\d\d/g));



/************************************************************************************
 * 
 * 
 * -9 Programe una expresión regular que de este texto    "11 km 12 km 14 m" obtenga ["14"]
 * 
 * 
 * 
 * 
 */


let text4 = "11 km 12 km 14 m";

console.log(text4.match(/\d4/g));


/**************************************************************************
 * 
 * -10 ¿Porque devuelve null  "hola".match(/HOLA/) y como arreglarlo para que devuelva ["hola"]?
 * 
 * 
 * Usando la bandera i Espesifica que no debe de distinguir entre mayusculas y minusculas y la bandera  g : Esto significa global , la usamos para encontrar todas la coinsidencias dentro de una cadena en lugar de simplemente encontrar la primera coinsidencia   
 * 
 */


console.log ("hola".match(/HOLA/ig));


/**************************************************************************
 * 
 * 
 * -11 Programe una expresión regular que de este texto  "hola\ntu" obtenga ["tu"]
 * 
 * 
 */

console.log ("hola\ntu".match(/t\w{1}/gm));




