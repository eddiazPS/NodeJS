
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&    FUNCIONES     &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



/**
 * Funciones: Es un bloque de codigo JavaScript que se define una vez pero puede ejecutarce tantas veces como se desee.
 * 
 * Argumento - valor que le pasamos a la funcion
 * Parametro - la varblae que se define en la funcion 
 * 
 * Las funciones en Js son Objetos; como son objetos podemos estableser propiedades, tambien podemos invocar otras funciones. las definiciones
 *  de Funciones se pueden anidar dentro de otras Funciones   
 * 
 * formas en las que se pueden definir funciones 
 * 1) ES6 se define lo que es la funciones flecha(lambda)
 * 
 */

//Declaracion de funcion 

console.log(factorial(24));  //   la expresión de función solamente existen cuando se hace la expresión no se puede usar antes 

function factorial(x){
    if (x<=1){
        return 1;
    }

    return x*factorial(x-1);
}
console.log(factorial(24));


//Expresion de funcion , variable Js dentro de la misma funcion , siempre hacerla con const 


const factorial1 = function factorial1 (x){
    if (x<=1){
        return 1;
    }  
    return x*factorial1(x-1);
}

console.log(factorial1(33));


//

const cuadrado = function (x){
    return x*x;
}

console.log(cuadrado(3));


//expresion que se autoinvoque 

 
let cuadradoV2 = (function(x){
    return x*x;
}(8));

console.log(cuadradoV2);



//funciones flechas , exF , con la diferencia que es mas compacta, notacion matematica 

const suma = (x,y) => {return x+y;};
console.log(suma(3,7));

const sumaV2 = (x,y)=> x+y;  // una sola linea sin retrun sin {}

const polinomio = x => x*x+2*x+3;// con un solo parametro Sin ()
console.log(polinomio(3));

const devolverConstante = ()=> 10; // Constante, sin parametro, si o si el parentesis
console.log(devolverConstante());

//EJERCICIO////////////////////////////////////////////////////////////////////////////////// 

/**
 * definir 
 * -lider tecnico: Wilmer
 * -3 equipos  [[Edgar,Miguel,Edward],[Javier,Oscar,Wilman]]
 * -tester: Gustavo
 * 
 */



