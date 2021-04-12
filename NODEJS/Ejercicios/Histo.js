/**
Escribir un programa en JavaScript que recorra un arreglo y genere un histograma en base a los números de este.
 El arreglo se llama myArray y contiene 10 elementos que corresponden a números enteros del 1 al 5. Un histograma 
 representa que tanto un elemento aparece en un conjunto de datos (Debe mostrar la frecuencia para todos los números 
 del 1 al 5, incluso si no están presentes en el arreglo). Por ejemplo, para el arreglo: 
 myArray:=(1,2,1,3,3,1,2,1,5,1) el histograma se vería asi:

1: *****
2: **
3: **
4:
5: *

El código para declarar y poblar myArray ya está ahí, puede editarlo para probar con otros valores y puede hacer
 clic en el botón de actualizar junto a él para volver al valor original que se utilizará para validar su código 
 durante la prueba. Asegúrese de que los resultados se impriman exactamente como aparecen aquí, ya que incluso un 
 espacio faltante o sobrante puede marcar la pregunta como incorrecta (Notar espacio entre los ":" y el primer asterisco).
*/
var myArray = [1,2,1,3,3,1,2,1,5,1];



class DefaultMap extends Map{                    // DefaultMap  hereda clase Map
	constructor(defaultValue){                   // constructor con argumento 
		super();                                  // llama al constructor de la clase Map
		this.defaultValue = defaultValue;          // asigna defaultValue al miembro de la clase defaultValue   
	}
	get(key){                                   // funcion get : funcion para obtener el valor o el valor por defenicion  
		if(this.has(key)){
			return super.get(key);
		}else{
			return this.defaultValue;
		}
	}
}



let map = new DefaultMap(0);

for (let num of myArray){
let count = map.get(num) ;
map.set(num,count+1);
}

console.log(map.get(1));


map.forEach((v,k)=>{
    console.log(k+": "+"*".repeat(v));
});





