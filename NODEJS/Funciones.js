
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
function factorial(x){
    if (x<=1){
        return 1;
    }

    return x*factorial(x-1);
}
console.log(factorial(4));


//Expresion de funcion 
const factorial1 = function factorial1 (x){
    if (x<=1){
        return 1;
    }  
    return x*factorial1(x-1);
}

console.log(factorial1(33));



























