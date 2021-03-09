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

			let count = this.letterCount.get(character);

			this.letterCount.set(character,count+1);

			this.totalLetters++;                                       //contador 

		}



	}

	toString(){                                                          //sobreEscribimos la funcion toString para que cuando sea llamada 

		let entries = [...this.letterCount];                         //convierte  de tipo clave valor               

		entries.sort((a,b)=>{                                        // los organiza  -1   o 1   y si no b - a 

			if (a[1]===b[1]) {

				return a[0] < b[0]? -1 : 1;

			}else{

				return b[1] - a[1];

			}

		});

		for(let entry of entries){

			entry[1] = entry[1] / this.totalLetters * 100;

		}

		entries = entries.filter(entry => entry[1]>=1);                                          // elimina los menores a uno

		let lines = entries.map(

			([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);

		return lines.join("\n");

	}

}



async function histogramFromStdin(){                              //  funcion que orquesta el codigo  

	process.stdin.setEncoding("UTF-8");

	let histogram = new Histogram();

	for await(let chunk of process.stdin){                          // await   no lo he usado 

		histogram.add(chunk);

	}

	return histogram;

}



histogramFromStdin().then(histogram =>{

	console.log(histogram.toString());

});