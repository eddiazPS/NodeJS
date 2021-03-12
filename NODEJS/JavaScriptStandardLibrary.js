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


let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text3 = "Visita mi blog  https://zoom.us/j/92769666327?pwd=bU5vQTFBbC81LzVPamFBd0Y3UEJydz09";
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
console.log(epoch)
var nowA = new Date ();
let ms = nowA - epoch4   ;
console.log("milisegundos entre 2021 y 1970 :"+ms.toLocaleString());

 
//tiempo final del ejercicio
let endTime2 = Date.now();
console.log(endTime2-startTime2);