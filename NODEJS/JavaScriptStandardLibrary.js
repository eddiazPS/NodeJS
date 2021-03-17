//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************************SET*****************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************
/*
* set Class : un sed es una coleccion de valores como lo es una matriz. sin embargo a diferencia de las matrices los 
* seds no estan ordenados ni indexados y no permiten duplicacos. Un vaor es miembro de un set o no es miembro. No es 
* posible preguntar cuantas veces aparece un valor en un conjunto
*/


let setOne = new Set();  // set vacio
let setTwo = new Set([1,setOne]);              // se crea un sed con dos miembros 
let setThree = new Set(setOne);  // un nuevo set que copia los elementos de setOne
let setFour = new Set("Mississipi"); // colocamos cuatro elementos "M","i","s" ,"p" no admite duplicados
console.log(setFour.size);
setOne.add(1);
setOne.add(1);
setOne.add(true);
setOne.add([1,2,3]);
setOne.add("prueba");

console.log(setOne.size);
setOne.delete(1);
console.log(setOne.size);
setOne.delete("prueba");                                       //   elimina un valor y retorna un booleano   tru sisis false si no 
console.log(setOne.size);
setOne.clear();
console.log(setOne.size);
setOne.add("a").add("b").add("c");
console.log(setOne.size);

// verificacion si un valor es miembro del set 
let digitsPrimes = new Set ([2,3,5,7]);
console.log(digitsPrimes.has(2));
console.log(digitsPrimes.has("2"));
console.log(digitsPrimes.has(33));

//Buclces   con Sets
let sum = 0;for (let prime of digitsPrimes) {      // los set son iterables 
	sum += prime;	
}
console.log (sum);

// Convercion a matrices 
console.log ([...digitsPrimes]);                        //SET COLECCIONES DESORDENADAS mantiene el orden de iteracion 
console.log (Math.max(...digitsPrimes));;
//Foreach
let product = 1;
 digitsPrimes.forEach(prime => product *= prime);         // 
 console.log(product);


// Ejercicio 

// album del mundial  

let LaminaEncontrada = new Set ([2,33,5,77,45]);   //   el album nuevo traia un sobre de 5 laminas    
console.log(LaminaEncontrada.size+" Laminas encontradas de un sobre");
LaminaEncontrada.add(22).add(43).add(55).add(3).add(4).add(20).add(56).add(87).add(90).add(45); // se compran dos sobres de 5  
console.log(LaminaEncontrada.size+" Laminas encontradas de 3 sobres");
console.log("La tengo "+LaminaEncontrada.has(33));                // un amigo trae 3 repetidas 
console.log("La tengo "+LaminaEncontrada.has(5)); 
console.log("La tengo "+LaminaEncontrada.has(100));    //se la comramos 
LaminaEncontrada.add(100);
console.log(LaminaEncontrada.size+" Laminas encontradas de 3 sobres y una repetidas");


//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************************MAP*****************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************

/*
*Representa un conjunto de valores conocidos como claves, donde cada clave tiene como valor asociado (o mapeado). un Map es como 
*una matriz pero en ligar de buscar un conjunto de numeroas enteros secuenciales como claves los maps nos permiten usar valores 
*arbitrarios como indices 
*
*/

let mapOne = new Map (); // Map vacio
let mapTwo = new Map ([  // nuevo mapa inicializado con claves de tipo String y mapeadas a numeros
						["one",1],
						["two",2] 							
				  ]); 
let mapThree = new Map (mapTwo);  // esto es una copia
let obj = {x:1,y:2};
let mapFour = new Map (Object.entries(obj));//igual a new Map ([["x",1],["y",2]])



let mapFive = new Map(); 
console.log(mapFive.size);

mapFive.set("one",1);
mapFive.set("two",2);
console.log(mapFive.size);

console.log(mapFive.get("two"));
mapFive.set ("one",true);
console.log(mapFive.get("one"));   // modificar valores que ya estan 

console.log(mapFive.has("one"));
console.log(mapFive.has(true));  // has solo busca claves 



mapFive.delete ("one");
console.log(mapFive.size);
mapFive.clear();
console.log(mapFive.size);

mapFive.set("one",1).set("two",2).set("three",3);   //  se puede encadenar   es set 
console.log(mapFive.size);


let mapSix = new Map ();
mapSix.set({},1);  // le pasamos como clave un objeto vacio 
mapSix.set({},2);
console.log(mapSix.size);


console.log(mapSix.get({}));    // un objeto vacio no es una llave 


mapSix.set("one",undefined);
console.log(mapSix.get("one"));

console.log(mapSix.get("two"));

console.log("HOLA mapsix");
//transformar un Map

let mapSeven = new Map (); 
mapSeven.set("one",1).set("two",2).set("three",3);
console.log([ mapSeven]);
console.log([... mapSeven]);    // convertir en un arreglo   matriz de matrices y es iterable  
for (let [key , value] of mapSeven  ){
console.log(` llave ${key} - valor ${value}`);
}

console.log ([...mapSeven.keys()]);
console.log ([...mapSeven.values()]);
console.log ([...mapSeven.entries()]);


mapSeven.forEach((key,value)=> console.log(`llave: ${key} - valor: ${value}`));




// EJERCICIO 


// guardar palabras 

let mapDir = new Map (); 
mapDir.set("O","oso").set("U","uno").set("E","Elelefante").set("E","Enano");    // no guarda Elefante - llaves unicas 
console.log([... mapDir]);  // palbras actuales
  console.log("Inicial usada U? "+mapDir.has("U"));       //  buscamos una llave que no exista   
  console.log("Inicial usada E ? "+mapDir.has("E"));
  console.log("Inicial usada O? "+mapDir.has("O"));
  console.log("Inicial usada M? "+mapDir.has("M"));
  mapDir.set("M","MIERCOLES");                             //agregamos la plabra 
console.log("se agrega MIERCOLES");

console.log("se eliminara :  "+mapDir.get("U"));
mapDir.delete ("U");                                       //eliminamos una plabra 

console.log([... mapDir]);

console.log("RESUMEN GENERAL DE PALABRAS ");                   // RESUMEN GENERAL
mapDir.forEach((key,value)=> console.log(` ${key} -  ${value}`));
mapDir.forEach((key,value)=> console.log(` ${value} -  ${key}`));
console.log([...mapDir.entries()]);






//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************************ARRAYS TIPO*********************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************

/*
*matrices con tipo, definirlo con el constructor  
*en Js las matrices pueden tener elementos de cualquier tipo , las matrices con tipo js6 

arrays typed : los elementos de una typed array  son todos numeros. permiten espesificar el tipo y el tamaño de los numeros que
se almacenaran en la raiz, se debe espesificar la longitud de una matriz con tipo cuando se crea y esa longitud nunca puede cambiar
los elementos de una matriz con tipo siempre se inicializan a creo cuando se crean .
*/


let bytes = new  Uint8Array (1024); // 1024 bytes  - si se pasa las gurda 
let matrix = new Float64Array(9); // matriz 3x3
let point = new Int16Array(3);  // un punto en un espacio de 3d 
let rgba = new Uint8ClampedArray(4);// un valor de pixel rgba de 4 bytes  - no lodeja salir de ese rango

let white = Uint8ClampedArray.of(255,255,255,0); // rbga del color blanco
let ints = Uint32Array.from(white); // los mismos 4 numeros como enteros   -   passa a enteros de 32 bits  .from para transformar  argumentos del from  array iterable elementos numericos 

console.log(Uint8Array.of(1.23,2.99,45000));  // trunca los valores para que se adapten al tamño actual 

// referencia opaca un espacio de memoria que no tiene tipo, si tiene tamaño , la podemos usar en diferentes arrays de tipo

let buffer = new ArrayBuffer(1024*1024);
console.log(buffer.byteLength);  // imprime el tamño de bytes de buffer 
let asBytes = new Uint8Array (buffer);
let asInts = new Int32Array (buffer);
//l

// todas la matrices tienen una ref opaca un ArrayBuffer lo tienen por defecto , la matris define por default 

// EJemplo 
let MatrizaA = new BigInt64Array(12+1);
console.log(MatrizaA[0]);



function sieve(DatoIO){
  let Matriza = new Uint8Array(DatoIO+1);
  console.log(Matriza)
  let max = Math.floor(Math.sqrt(DatoIO));
  let incont = 2;
  while(incont <= max){
   for (let index = 2*incont ; index <= DatoIO ; index +=incont ) {
      Matriza[index] = 1 ;

  }
  while (Matriza[++incont])
  ;
  }
 while (Matriza[DatoIO]){
  DatoIO--;

 }
return DatoIO;

}

console.log(sieve(120));


//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************************EXPRESIONES REGULARES **********************************************
//****************************************************************************************************************************
//****************************************************************************************************************************



/*Una exprecion regular es un objeto que describe un patron textual, js tiene una...   String usa funciones regulares
las expreciones regulares son un minilenguaje de programacion    */


//como definir una exprecion regular mediante un literal normal

// sintaxis literal 

//constructor regExp

 

/**-------+++
 * (? = p)
Una afirmación de anticipación positiva. Requiere que los siguientes caracteres coincidan con el patrón p, pero no los incluyas en la coincidencia.  

(?!p)
Una afirmación de anticipación negativa. Requiere que los siguientes caracteres no coincidan con el patrón p.
 
^
Haga coincidir el comienzo de la cadena o, con la bandera m, el comienzo de una línea.
$
Haga coincidir el final de la cadena y, con la bandera m, el final de una línea.
\b
Coincide con el límite de una palabra. Es decir, haga coincidir la posición entre un carácter \w y un carácter \W o entre un carácter \w y el principio o el final de una cadena. (Tenga en cuenta, sin embargo, que [\b] coincide con retroceso).
\B
Coincidir con una posición que no sea un límite de palabras.
 *///--------+++

 





//let pattern = /s$/;
let pattern = /s$/i;  //i= no importa si es minuscula o mayuscula 



// constructor 
let pattern2 = new RegExp("s$");   // coinsider con cualquer cadena que termine con la letra s    
                                   // $ simbolo Pesos  metacaracter especial o flag coinside con el final de otra cadena  

/*   Metacaracteres en expreciones regulares 

*       ^ $ . * + ? = ! : | / \ ( ) [] {}     No considen literal mente y tienen su significado especial    

  .    :  Cualquier carácter excepto nueva línea u otro terminador de línea Unicode. O, si la expresión regular usa la marca s, entonces un punto coincide con cualquier carácter, incluidos los terminadores de línea.


caracteres de puntuacion  "" @ no tienen significado especial 

para hacer coinsidir un metacaracter usamos un \ y el caracter 

clases de caracteres 
Una clase de caracter coincide con cualquier caracter que contenga 

*/
 
let pattern3 = /[abc]/;  // coinside con cualquiera de las letra a,b o c

let pattern4 = /[^abc]/;  // negado  coinside con cualquiera que no sea  a,b o c

let pattern5 = /[a-z]/;    // esto es un rango coinside con cualquier caracter del alfabeto latino


let pattern55 = /[a-zA-Z]/;    // esto es un rango coinside con cualquier caracter del alfabeto latino Mayusculas y minusculas 

let pattern6 = /[a-zA-Z0-9]/;    // esto es un rango coinside con cualquier caracter del alfabeto latino Mayusculas y minusculas y digitos 

let pattern7 = /[...]/;    //  coinside con cualquier caracter entre corchetes

let pattern8 = /[^...]/;    //  coinside con cualquier caracter que no este entre corchetes


let pattern88 = / [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;



/**
 * Para comprobar que el usuario introduce una dirección de email válida podemos hacer distintos tipos de comprobaciones. La más básica es comprobar que la cadena contiene cualquier número de caracteres seguido del carácter @ segudio de cualquier número de caracteres, seguido de un punto, y seguido de cualquier número de caracteres. Esta validación es amplia y no aceptaría la mayor parte de direcciones no válidas, por ejemplo no se aceptaría <<andres@gmailcom>> porque le falta el punto.
En general será suficiente usar una expresión regular simple del tipo:
 */
 let pt = /\S+@\S+\.\S+/; 

/**
 * Repeticiones  en expreciones regulares 
 * son patrones mas complejos que usan una sintaxis que espesifica cuantas veces se puede repetir un elemento 
 */


let pattern9 = /\d/; // coinside con un digito  entre 0 y 9

let pattern10 = /\d\d/; // coinside con dos digitos  entre 0 y 9
/**
 *  deso coinsidir 1000 digitos uso los repetidores
 * {n,m} Esto significa que coincide con el elmento anterior al menos n veces , pero no mas de m veces
 * {n,}: Coinside con el elemnto anterior  n o mas veces
 * {n} : coinside exactamente con n apariciones del elmento anterior.
 * ?   : coinside con cero o una apariciones del elemento anterior. esto significa que el elemento anterior es opcional esto es similar a colocar : {0,1}
 * +   : coinside con una o mas ocurrencias del elemento anterior. esto equivale a: {1,}
 * *   : coinside con cero o mas ocurrencias del elemento anterior . esto equivale a {0,} 
 */
  


let pattern11 = /\d{2,4}/;// coinsida entre dos y cuatro digitos 


let pattern111 = /\w{3}\d?/; // coinsidir con tres caracteres de plabras y un digito opcional


/**
\w    Cualquier carácter de palabra ASCII. Equivalente a [a-zA-Z0-9_].
\W    Cualquier carácter que no sea un carácter de palabra ASCII. Equivalente a [^a-zA-Z0-9_].
\s    Cualquier carácter de espacio en blanco Unicode.
\S    Cualquier carácter que no sea un espacio en blanco Unicode.
\d    Cualquier dígito ASCII. Equivalente a [0-9].
\D    Cualquier carácter que no sea un dígito ASCII. Equivalente a [^0-9].
[\b]  Un retroceso literal (caso especial).


 */


 let pattern13 =/\s+java\s+/;  // coinsidir con java con uno o mas espacios antes y despues de la palabra java 

 let pattern14 = /[^(]*/; // coinsidir con cero o mas caracteres que no sean parentesis abiertos 





  /**
   * FLAGS
   * 
   * Js   define 6 flags  i se espesifican del segundo / el que sierra 
   * 
   * g : Esto significa global , la usamos para encontrar todas la coinsidencias dentro de una cadena en lugar de simplemente encontrar la primera coinsidencia 
   * i : Espesifica que no debe de distinguir entre mayusculas y minusculas 
   * m : Espesifica que la coinsidencia debe realizarce en moodo multilinia 
   * s : es util cuando se trabaja con texto que incluye nuevas lineas es similar a la m 
   * u : Significa Unicode. hace que la exprecion regular coinsida con los puntos Unicode completos , en lugar de coinsidir con los valores de 16 bits, si no se usa esta bandera las expreciones regulares no funcionaran bien con texto que incluyan emojis y otros caracteres como los chinos 
   * y : Esta bandera indica que la expresion regular es sticky (pegajosa) debe coinsidir al principio de una cadena o al primer caracter que sigue a la coincidencia anterior  
   * 
   * 
   */



   /**
    * Metodos de String para coincidencia de patrones 
    * 
    * search  : toma un argumento de exprecion regular y devuelve la primera subcadena o -1 si no encuentra coinsidencia, no admite busquedas globales por tanto ingnora la bandera g 
    * replace : opracion de busqueda y reemplazo. como primer argumento toma una exprecion regular y como segundo argumento una cadena de remplazo  
    * 
    */





    console.log("JavaScript".search(/script/ui));
    console.log("Python".search(/script/ui));

let text = "javascript";
text = text.replace(/javascript/gi,"JavaScript");
console.log(text);
    

let times1 = "15 times 15 is 225";
console.log(times1.replace(/\d+/gu,n=>parseInt(n).toString(16)));  //f times f is e1    se transforman los numeros en exadecimal   .toString(16)  sitema numerico

let times = "15 times 15 is 225";
console.log(times.replace(/\d+/gu,n=>parseInt(n).toString(16)));




/***********************************************************************************************************
 * Match
 * 
 * toma una exprecion regular como unico argumento y devuelve una matriz que contiene los resultados de la coinsidencia, si no encuentra coincidencia devuelve null
 * 
 */


let text1 = "7 plus 8 equals 15";

console.log(text1.match(/\d+/g));


//primera coincidencia 

let text2 = "7 plus 8 equals 15";

console.log(text2.match(/\d+/));
// [7,8,14]

//---------------------------Programa match   analizar una URL 


let url = /(\w+):\(\/([\w.]+)\/(\S*)/;
let text3 = "Visita mi blog  https:(/zoom.us/j/92769666327?pwd=bU5vQTFBbC81LzVPamFBd0Y3UEJydz09";
let match = text3.match(url);
let fullUrl, host, path , protocol;

if (match != null ){
  fullUrl =match [0];
  protocol = match [1];
host = match [2]
path = match [3]

}

console.log(`match: ${match}` );
console.log(`fullUrl: ${fullUrl}` );
console.log(`protocol: ${protocol}` );
console.log(`host: ${host}` );
console.log(`path: ${path}` );
console.log(`host: `+ host );
/*
console.log(text.match(url).groups );
console.log(text.match(url).groups.protocol );
console.log(text.match(url).length);
*/

/***********************************************************************************************************
 * Split
 * 
 * Este metodo divide la cadena en una matriz utilizando como argumento un separador 
 * 
 * 
 * 
 * 
 */

console.log ("1,2,3,4,5,6,7,8,9,0".split(","));

// se puede usar con expresiones regulares 
console.log("1, 2, 3,\n4, 5".split(/\s*,\s*/));            //  \s _sapacios 
 

const htmlTag = /<([^>]+)>/;  // < followed by one or more non->, followed by >
"Testing<br/>1,2,3".split(htmlTag)  // => ["Testing", "br/", "1,2,3"]

console.log("HOLA");





//****************************************************************************************************************************
//****************************************************************************************************************************
//*********************************************FECHAS y HORAS - DATES AND TIMES **********************************************
//****************************************************************************************************************************
//****************************************************************************************************************************

/**
 * 
 * create time stamp
 * update time stamp
 * 
 * es una api para el manejo de fechas, la clase date es la clase de JS para trabajar con fechas y horas 
 * 
 */

var now = new Date (); // toma la fecha de la maquina local 
console.log(now);

let epoch = new Date (0); // numero de milisegundos desde 1970
console.log(epoch)

let century = new Date(2100,  // año 2001
                    0,  //  enero, primer mes del año es el cero 
                    1,  //  dia 1, primero del mes
                    2,3,4,5); // 02 : 03 : 04.005   hora local, si omitimos 
console.log(century);


let century2 = new Date(2100,  // año 2001
  0,  //  enero, primer mes del año es el cero 
  1  //  dia 1, primero del mes
   ); // 02 : 03 : 04.005   hora local, si omitimos numeros de la hora estamos a media noche  
console.log(century2);

//UTC   tiempo universal cordinado:  es el principal estandar de tiempo por el cual el mundo regula los relojes

let century3 = Date.UTC (2100,0,1);
console.log(century3); // milisegundos 
console.log(now.toUTCString());

let century4 = new Date (Date.UTC (2100,0,1));  // convierte en una fecha normal 
console.log(century4); 


// tipos de fechas local y universsal UTC

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMonth());
  console.log(now.getSeconds());
    console.log(now.getTime());
      console.log(now.getTimezoneOffset());



//para universal UTC mismos metodos pero se agrga getUTC

          console.log(now.getUTCDate());
          console.log(now.getUTCDay());
          console.log(now.getUTCFullYear());
          console.log(now.getUTCHours());
          console.log(now.getUTCMinutes());
          console.log(now.getUTCMonth());
          console.log(now.getUTCSeconds());
          //console.log(now.getUTCTime());
          // console.log(now.getUTCTimezoneOffset());
          console.log(now.getUTCDate());
          console.log(now.getUTCFullYear());


          //  lo mismo que son los Get asi son los Set's
          // set
          console.log(now.setDate(5));
          console.log(now.setFullYear(20122));
          console.log(now.setHours(23));
          console.log(now.setMilliseconds(34));
          console.log(now.setMinutes(6));
          console.log(now.setMonth(4));
        

   //  UTC   se cambia al date local   para no confundir 
           //set UTC 
          console.log(now.setUTCDate(5));
          console.log(now.setUTCFullYear(20122));
          console.log(now.setUTCHours(23));
          console.log(now.setUTCMilliseconds(34));
          console.log(now.setUTCMinutes(6));
          console.log(now.setUTCMonth(4));
  
// cuantos eneteros admite en milisegundos Js 8.640 billones 000 000 000 000   de milisegundos    equiale a 270.000 años  


now.setTime(now.getTime()+30000)
console.log(now);

// hora actual como marca de tiempo 

//medir en tiempo el codigo *************************************************************************
let startTime = Date.now();
let endTime = Date.now();
console.log(endTime-startTime);



// formateo convertir los objetos date en cadenas 


/**
 * 
 * ToString  () = >  transforma a texto usando zona horaria local
 * 
 * 
 */

let fechaText = now.toString();
console.log(fechaText);


let fechaTextUTC = now.toUTCString();
console.log(fechaTextUTC);


//  formato ISO 

let toISOString = now.toISOString(); // este formato imprime año -mes -dia hora : minutos : segundos .milisegundos
// T - separa la fecha de la hora 
// Z - espesifica 
console.log(toISOString);
console.log(now.toLocaleString());


// formatear la fecha y omitir la hora 
console.log(now.toDateString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toTimeString());


let transform = Date.parse ('2012/06/23');
console.log(transform);





var now3 = new Date ();


// Ejercicio *****************************************************************************fechas 
// una fecha aleatoria

//tomo tiempo de inicio del ejercicio
let startTime2 = Date.now();


let fecha = new Date(2022,4,1,22,3,4,5);  
console.log(fecha);

// fecha en estandar UTC
console.log("Fecha : "+fecha.getUTCDate()+" / "+fecha.getUTCMonth()+" / "+fecha.getUTCFullYear());
console.log("Hora  : "+fecha.getUTCHours()+" : "+fecha.getUTCMinutes()+" : "+fecha.getUTCSeconds());

//  modificacion de la hora para ver cambio en el estandar
console.log(fecha.setHours(0));    
console.log(fecha);
console.log(" Hora UTC :"+fecha.getUTCHours());
// en formato iso 
let toISO  = fecha.toISOString(); 
console.log(toISO);


// cuantos milisegundos hay desde 1970 a hoy 
let epoch4 = new Date (0);  
console.log(epoch4)
var nowA = new Date ();
let ms = nowA - epoch4   ;
console.log("milisegundos entre 2021 y 1970 :"+ms.toLocaleString());

 
//tiempo final del ejercicio
let endTime2 = Date.now();
console.log(endTime2-startTime2);







//****************************************************************************************************************************
//****************************************************************************************************************************
//*********************************************EXCEPCIONES *******************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************

/**
 * 
 * 
 * classe error  -> throw
 * 
 * se crea el objeto error , ubicacion en la pila  y se recomienda ubicarlo antes del throw
 * 
 * propiedad se llama error 
 * 
 * node 
 * 
 * se puden definir subclases como en java, de error
 * se puden definir propias propiedades
 * 
 * 
 * No usar if para comparar errores  usar el throw, manejar Excepciones -> try catch
 */


class HTTPError extends Error {

  constructor(status,statusText,URL){
    super(`${status} ${statusText}: ${URL} `);
    
    this.status = status;
    this.statusText = statusText;
    this.URL = URL ;
  }

  get name(){

    return "HTTPerror";
  }
}

// probar

let error = new HTTPError (404,"Not Found","https://zoom.us/j/92769666327?pwd=bU5vQTFBbC81LzVPamFBd0Y3UEJydz09");

console.log( error.status);
console.log(error.message);
console.log( error.name);


// ejemplo de dos sublases de errores .message .name



//-1-------------Validar Campos-------------------------------------


class ValidaError extends Error {

  constructor(name,message){
    super(`${name} ${message} `);
    
    this.name = name;
    this.message= message;
  } 
}

// probar

let error2 = new ValidaError ("Error de validacion","Complete los campos que tienen *");

console.log( error2.name);
console.log(error2.message);




//-2----------------division entre cero----------------------------------


class DivError extends Error {

  constructor(name,message,x){
    super(`${name} ${message} - ${x} `);
    
    this.name = name;
    this.message= message;
    this.x = x;
  } 
}

// probar

let error3 = new DivError ("Error Division entre cero","No se pude dividir en 0 ",9);

console.log( error3.name);
console.log(error3.x+" "+error3.message);


//----------------------------------------------------------

/*this.codigo 
this.descripcion
this.parametro*/


function ValidateCedula (cedula){
 if (cedula == "" ){
  throw new ValidaError("Error de validacion","campo vacio");
 }
}
try {
  ValidateCedula("");
} catch (error) {
  console.error(error.name);
  console.error(error.message);
  //console.error(error.stack);
}


//------------------------------------------------------


function ValidateDiv (numero){
  if ((parseFloat( numero )  === numero) && (numero != null) ){
   throw new  DivError("Error Division entre cero","No se pude dividir en 0 ",numero);
  }
 }
 try {
  ValidateDiv(9);
 } catch (error) {
   console.error(error.name);
   console.error(error.message);
   console.error(error.x);
   //console.error(error.stack);
 }



//****************************************************************************************************************************
//****************************************************************************************************************************
//*********************************************SERIALIZACIONES*******************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************



/**
 * 
 * 
 * Ttransformar la estructura de datos a bites o a caracteres para que se puedan trasmitir por protocolos HTTP 
 * convertir estructuras de datos en bites o caracteres se conoce como serializacion 
 * 
 * JSON  conotacion de un objeto java script 
 * 
 * cuando se va a tramitir datos atravez de la red, nesecitamos convertir estructuras de datos en cadenas y para esto necesitamos serializar, la mejor forma para serializar estructuras de datos es usando JSON 
 * 
 * que acepta JSON: cadenas caracteres, numeros primitivos(enteros, doubles, float ) , booleanos , matrices objetos javascripts
 * 
 * JSON no admite:  Maps   Sets , objetos regExp, dates , Typed arrays 
 * 
 * como se puede serailizar y deseralizar ->     JSON.stringify() : para serializar 
 *                                               JSON.parse() : para deserializar 
 * 
 *  
 * 
 */


// {estructura java string}

let array0 = [1,2,3,4,5];
console.log(array0);

let array2D = [[4,2],[2,3,4],[1,2],null,[4]]
console.log(array2D);




let object = {s:"",n:0,a:[true,false,null]};

let serializacion =  JSON.stringify(object);
console.log(serializacion); // texto

let deserializacion =  JSON.parse(serializacion);
console.log(deserializacion); // objeto


console.log(JSON.stringify(object,null,2));
//       null , validaciones  casi no se usa   2  salto de linea dos espacios de sangria tabulacion recomendado
console.log(JSON.parse(JSON.stringify(object,null,2) ));
//                                      el parece ignora los espacios (sangria) que se le asigna en stringify              





//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* API internacionalizacion ******************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************

//  API    nos permite formatera numeros , formato de monea o porsentages    


let euros = Intl.NumberFormat("es",{style:"currency",currency:"EUR"});
console.log(euros.format(10));


 

  let dolares = Intl.NumberFormat("es", { style: "currency", currency: "USD" });
  console.log(dolares.format(10));

  let pesos = Intl.NumberFormat("es", { style: "currency", currency: "COP" });
  console.log(pesos.format(10));

  let Libras = Intl.NumberFormat("es", { style: "currency", currency: "GBP" });
  console.log(Libras.format(10));

//google ->  1000 EUR to COP 


// formato a un arreglo 
let data = [0.05 , 0.75 , 1 ]; // Intl.NumberFormat("es", { style: "currency", currency: "GBP" });
let formatData = Intl.NumberFormat(undefined,{style:"percent",minimumFractionDigits:1,maximumFractionDigits:1}).format;
console.log(data.map(formatData));


let arabic = Intl.NumberFormat("ar",{useGrouping:false}).format;
console.log(arabic(12345678910));

let indi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
console.log(indi(12345678910));

// esta api se pude usar para las fechas formato defeinido dependiendo de la region ********************************************************************* 


let date= new Date("2021-03-16T08:54:30Z");


let date1= new Date("2021-03-16T08:54:30Z");
console.log(Intl.DateTimeFormat("en-US").format(date));



//FRANCIA
console.log(Intl.DateTimeFormat("en-FR").format(date));

//ESPAÑA
console.log(Intl.DateTimeFormat("en-ES").format(date));




let  opts = {weekday:"long",month:"long", year : "numeric",date:"numeric"}
console.log(Intl.DateTimeFormat("en-US",opts).format(date1))


//Digitos de los minutos 


//opts = {hour:"numeric",minute:"2-digit"};
opts = {hour:"numeric",minute:"2-digit",hour12:"true",hourCycle:"h11"};   // media noche 00 ;   H12   12    H24


/**
 * h11: Media noche 0 y 11 de la noche 11PM
 * h12: Media noche 12
 * h23: Media noche 0 y 11 serain 23PM
 * h24: Media noche  24 
 * 
 * 
 */



console.log(Intl.DateTimeFormat("en-US",opts).format(date1));


// calendarios no cristianos 

//hebreo
console.log(Intl.DateTimeFormat("en-u-ca-hebrew",opts).format(date1));

// año hereo
let opts2 = {year:"numeric",era:"short"};
console.log(Intl.DateTimeFormat("en-u-ca-hebrew",opts2).format(date1));

//budista
console.log(Intl.DateTimeFormat("en-u-ca-buddhist",opts2).format(date1));
//chino
console.log(Intl.DateTimeFormat("en-u-ca-chinese",opts2).format(date1));
// persa
console.log(Intl.DateTimeFormat("en-u-ca-persian",opts2).format(date1));



//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* API DE URL ******************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************



/** 
 * desintegra la URL
 * 
 */


let url2 = new URL("https://example.com:8000/path/name?q=term#fragment");


console.log(url2.href);
console.log(url2.origin);
console.log(url2.protocol);
console.log(url2.host);
console.log(url2.hostname);
console.log(url2.port);
console.log(url2.pathname);
console.log(url2.search);
console.log(url2.hash);

//************************************************************************************ */ protocolo ftp
let url3 = new URL("ftp://admin:1337!@ftp.example.com/"); 

console.log(url3.username);
console.log(url3.password);

console.log(url3.href);
console.log(url3.origin);
console.log(url3.protocol);
console.log(url3.host);
console.log(url3.hostname);
console.log(url3.port);
console.log(url3.pathname);
console.log(url3.search);
console.log(url3.hash);


let url4 = new URL ("https://example.com");

console.log(url4.pathname="API/search");
console.log(url4.search="q=test");

console.log(url4.toString());



// se le agreagan parametros , cambian   , preguntas has ***************************************************++
let url5 = new URL("https://example.com");
console.log(url5.search);   // no tiene parametros 
console.log(url5.searchParams.append("q","test"));
console.log(url5.search);
console.log(url5.href);


url5.searchParams.set ("q","x");
console.log(url5.search);


console.log(url5.searchParams.get("q"));

console.log(url5.searchParams.has("q"));


url5.searchParams.append ("others","w");
console.log(url5.search);
console.log(url5.href);
// si se repiten 

url5.searchParams.append ("others","rw");
console.log(url5.searchParams.getAll("others"));


console.log(url5.searchParams.sort());
console.log(url5.search);

// url en array ***************************************************************************************
console.log([... url5.searchParams]);

url5.searchParams.delete("others");

console.log(url5.search);



//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* TIMERS**************** ******************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************



/**
 * son funciones llamadas call back set timeOut set interval 
 * 
 * 
 * sistema operativo invoca cierto codigo , invocar la funcion cada sierto tiempo , funciona en todos los navegadores ,
 * 
 * 
 * Callback pasar una funcion como argumento 
 * 
 */
// primer agumento una funcion y espesificamos un tiempo para que se ejecute 

setTimeout(()=>{console.log("Redy...");} ,1000  );
setTimeout(()=>{console.log("Set...");} ,2000  );
setTimeout(()=>{console.log("Go...");} ,3000  );


// señales de vida aplicacion este bien cada sierto tiempo se le hace una peticion para comprobar si esta viva 

let clock = setInterval(()=> {
  //console.clear();
  console.log(new Date().toLocaleTimeString());},
  1000); // 1000ms -> 1s 

setTimeout (()=>{clearInterval(clock);},10000);





//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* EJERCICIO  CON JAVA STANDAR LIBRAY********************************************
//****************************************************************************************************************************
//****************************************************************************************************************************


/**
   *  Por medio de una funcion TIMER ejecuto dos veces la Funcion NuevaContraseña, esta  recibe un String como parametro para
   *  generar la clave; la funcion retorna dos URLs  1)   protocolo ftp  
   *                                                 2)   API de consulta al historial del usuario.
   *   tambien envia la fecha de vencimiento para la clave y los costos por usar cada  servicio.  
*/

class ErrorDeContraseña extends Error {

  

  constructor(codigo, descripcion, parametro) {
    super(`${codigo} - ${descripcion} : ${parametro} `);

    this.codigo = codigo;
    this.descripcion = descripcion;
    this.parametro = parametro;
  }
}


function NuevaContraseña(newpss, numSeg) {
  var ContraseñaDeSeguridad = '';
  let user = "edgAdm7";


  // EXCEPCIONES
  if (newpss.length < 6) throw new ErrorDeContraseña(-2, "la contraseña ninimo tiene que tener 6 caracters", newpss);
  if (newpss.length > 10) throw new ErrorDeContraseña(-3, "la contraseña naximo tiene que tener 10 caracters", newpss);
  ContraseñaDeSeguridad = newpss;

  if (numSeg == null) throw new ErrorDeContraseña(-4, "el numero de seguridad es obligatorio", newpss);
  // ARRAYS TIPO

  let more = new Uint8Array([12 * numSeg, 234 / numSeg, 45 - numSeg]);
  let sumTipo = more[0] + more[1] + more[2] + blindNum.numero2();  //***************************************MODULE

  ContraseñaDeSeguridad = ContraseñaDeSeguridad + sumTipo;


  //  SET MAP

  let setP = new Set();
  setP.add("Per");
  setP.add("Cam");
  setP.add("Per");
  setP.add("Cel");

  let setR = new Set();
  setR.add("Mna");
  setR.add("Jut");
  setR.add("Flo");
  setR.add("Roa");

  let MapDir = new Map();
  MapDir.set("1", setP);
  MapDir.set("2", setR);


  if (numSeg % 2 == 0) {
    let setA = MapDir.get("1");
    let myArr1 = Array.from(setA);
    ContraseñaDeSeguridad = ContraseñaDeSeguridad + myArr1[blindNum.numero1()]; //***************************************MODULE

  } else {
    let setB = MapDir.get("2");
    let myArr2 = Array.from(setB);
    ContraseñaDeSeguridad = ContraseñaDeSeguridad + myArr2[blindNum.numero1()]; //****************************************MODULE
  }
  // EXPRESIONES REGULARES
  if (numSeg % 5 == 0) {
    ContraseñaDeSeguridad = ContraseñaDeSeguridad.replace(/\d{3}/, ".").replace(/\w{2}/, "#");
  } else {
    ContraseñaDeSeguridad = ContraseñaDeSeguridad.replace(/\d{2}/, ";").replace(/\w{3}/, "!");
  }

  //FECHAS

  let now = new Date();    //  fecha de creacion de la contraseña
  let newMonth = now.getMonth() + 1;
  let fechaVencimiento = new Date(now);
  fechaVencimiento.setMonth(now.getMonth() + 3);   // fecha de vencimiento


  //INTER API
  let costoCOP = ContraseñaDeSeguridad.length * 1000;
  let cosrtUSD = costoCOP / 3557.75;

  let cosrtEUR = costoCOP / 4238.76;



  let euros = Intl.NumberFormat("es", { style: "currency", currency: "EUR" });


  let dolares = Intl.NumberFormat("es", { style: "currency", currency: "USD" });


  let pesos = Intl.NumberFormat("es", { style: "currency", currency: "COP" });


  let arabic = Intl.NumberFormat("ar",{useGrouping:false}).format;


 let indi = Intl.NumberFormat("hi-IN-u-nu-deva").format;

   




  //SERIALIZACION DEL OBJETO DE RESPUESTA

  let objResultadoSERZ = { Contraseña: ContraseñaDeSeguridad, fechas: [now, fechaVencimiento, fechaVencimiento.toUTCString()], valorMoneda: [pesos.format(costoCOP), dolares.format(cosrtUSD), euros.format(cosrtEUR)] };
  
  let serializacionRes = JSON.stringify(objResultadoSERZ);
 
  let deserializacionRes = JSON.parse(serializacionRes);
  //console.log("DESERIALIZACION \n");
  //console.log(deserializacionRes); // objeto


  //RESPOSE URL   -   API URL URL



  let RESPONSEurl = new URL("ftp://"+user+":"+ContraseñaDeSeguridad+"@ftp.NodeJs.com/");

   




  let urlApi = new URL("https://MDNnApi.com");
  let PGPpss = blindNum.initNum2(ContraseñaDeSeguridad);
  
  //console.log(stats.initNum2(ContraseñaDeSeguridad));     LA URL no acepta caracteres especiales
   
  urlApi.searchParams.append("Historial",user);
  urlApi.searchParams.append("pssEncrip",PGPpss);
  urlApi.searchParams.append("Costo",indi);
   urlApi.search;



  return "* Contraseña  Sugerida: " + ContraseñaDeSeguridad + "\n- Fecha de creacion: " + now + "\n-Fecha de vencimiento: " + fechaVencimiento + "\n-Fecha de vencimiento universal time" + fechaVencimiento.toUTCString() + "\n-------------------------------------\n TOTAL DE LA SUGERENCIA : su transaccion tiene un valor de : Pesos Colombianos -> " + pesos.format(costoCOP) + "\n                                                                valor en : Dolares ->" + dolares.format(cosrtUSD) + "\n                                                                valor en : Euros -> " + euros.format(cosrtEUR) +"\n                                                                En numeros arabicos  -> " + arabic(costoCOP) +"\n                                                                En numeros indios  -> " +indi(costoCOP)+"\n-------------------------------------\n SERIALIZACION DE LA RESPUESTA \n" + serializacionRes+"\n-------------------------------------\n **** URL DE CONEXION ****  \n "+RESPONSEurl.toString() +"\n " +urlApi.toString();
}


const modules = {};

function require(moduleName) {
    return modules[moduleName];
}


modules['blindNum.js'] = (function () {
    const exports = {};



    exports.numero1 = function ( ) { return Math.trunc(Math.random() * (3 - 0) + 0);};
    exports.numero2 = function ( ) { let m = blindNum.numero1(); return Math.trunc(Math.random() * (90 - 10) + 10);};
    exports.initNum = function ( ) { return Math.trunc(Math.random() * (9999 - 1) + 1)+blindNum.numero2();};
    exports.initNum2 = function (ps) { return ps.replace(/\w*/g,".")+blindNum.numero2() ;}; 



    return exports;
}());


const blindNum = require('blindNum.js');
setTimeout(()=>{console.log("Opcion 1 ...");} ,1000  );
setTimeout(()=>{console.log("Opcion 2 ...");} ,2000  );

let clock = setInterval(()=> {
try {
  console.log(NuevaContraseña('1EdH6Y09GA',blindNum.initNum()));   //**********************************************************MODULE
} catch (error) {
  console.error("ErrorDeContraseña");
  console.error("codigo : " + error.codigo);
  console.error(error.descripcion);
  console.error("contraseña digitada: " + error.parametro);
  //console.error(error.stack);
}
},1000);  

setTimeout (()=>{clearInterval(clock);},2000);    // ************************************ TIMER

