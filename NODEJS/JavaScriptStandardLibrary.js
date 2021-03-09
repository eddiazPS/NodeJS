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