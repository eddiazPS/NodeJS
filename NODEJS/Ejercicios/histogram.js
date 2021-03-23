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



class Histogram {

	constructor(){                                                  //constructor vacio que crea un objeto DefaultMap y la variable totalLetters miembro de la clase se inicia en cero

		this.letterCount = new DefaultMap(0);                                

		this.totalLetters = 0;                                                

	}

	add(text){                                                       // funcion add donde entra como parametro text

		text = text.replace(/\s/g,"").toUpperCasse();                  // elimina espacios 

		for (let character of text) {

			let count = this.letterCount.get(character);              //  trae a variable count el numero de caracteres contados

			this.letterCount.set(character,count+1);                    // guarda en map letterCount el nuevo total por caracter

			this.totalLetters++;                                       //contador del total de las letras

		}



	}

	toString(){                                                          //sobreEscribimos la funcion toString para que cuando sea llamada 

		let entries = [...this.letterCount];                         //convierte a un arreglo -  de tipo clave valor  a array              

		entries.sort((a,b)=>{                                        // los organiza  -1   o 1   y si no b - a 

			if (a[1]===b[1]) {

				return a[0] < b[0]? -1 : 1;

			}else{

				return b[1] - a[1];

			}

		});

		for(let entry of entries){

			entry[1] = entry[1] / this.totalLetters * 100;                        // promedio

		}

		entries = entries.filter(entry => entry[1]>=1);                                          // elimina los menores a uno

		let lines = entries.map(

			([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);

		return lines.join("\n");

	}

}



async function histogramFromStdin(){                              //  funcion  importante que orquesta el codigo  

	process.stdin.setEncoding("UTF-8");

	let histogram = new Histogram();

	for await(let chunk of process.stdin){                          // await   pausa la ejecucion de la funcion async y espera la resolucion de la promesa peasada, depues reanuda la ejecucion de la funcion asinc y devuelve el valor resuelto. 

		histogram.add(chunk);

	}

	return histogram;

}



histogramFromStdin().then(histogram =>{                           // llamado de la funcion asincrona inicio y ejecucion del codigo , imprimimos en consola 

	console.log(histogram.toString());

});