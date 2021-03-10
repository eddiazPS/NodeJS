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

console.log([...mapDir.entries()]);


