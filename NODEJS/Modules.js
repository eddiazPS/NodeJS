//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* MODULES***********************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************




/**
 * 
 * 
 * 
 * 
 * node : modules 
 * 
 *  programacion modular : permitir que los programas se ensamblen y que se ejecuten correctamente 
 * 
 * 
 * 
 * 
 * modularidad en Java Script: ocultar detalles de implementacion privada , mantener orenado el Name Space globala para que los modulos no puedan modificar accidentalmente las variable funciones y clases definidas por otros modulos 
 * 
 * 
 * 
 *  diferncia emtre clases y sar modulos 
 *  si hablamos de una clase ; es una especie de modulo  
 *
 * ocultar detalles privados y que se use 
 * 
 * OCULTAR LOS DETALLES DE IMPLEMENTACION 
 */

/**
 * Modulos. Permite que grandes programas se ensamblen, y que funcionen correctamente.
 * Consiste en, ocultar detalles de implementacion privada
 * mantener ordenado el namespace global para que los modulos no puedan modificar accidentalmente las 
 * variables funciones y clases definidas por otros modulos.
 * 
 * 
 */





 
const statsIni = (function() {

    const sum =(x,y) => x+y;
    const square =(x)= x => x*x;
    function mean (data){
     return data.reduce (sum)/ data.length;
      };
   function stdDev(data){
       let m = mean(data);
     return Math.sqrt (
      data.map(x=>x-m).map(square).reduce(sum)/(data.length-1)
);

  }

return {
   mean ,
   stdDev,
   sum
}

}() );




console.log (statsIni.mean ([1,3,5,7,9]));
console.log (statsIni.stdDev ([1,3,5,9]));
console.log(statsIni.sum(1,3));

 

// -------------------------

 

const calculadoraInit  =  (function (){
    const multiplicar =(x,y)=>x*y;
    const restar =(x,y)=>x-y;
    const dividir =(x,y)=>x/y;
    const sumar =(x,y)=>x+y;

    return {
        multiplicar,
        restar,
        dividir,
        sumar

     }
}());

console.log (calculadoraInit.multiplicar(2,4));
console.log (calculadoraInit.sumar(2,4));
console.log (calculadoraInit.restar(2,4));
console.log (calculadoraInit.multiplicar(2,4));




const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['stats.js'] = (function () {
    const exports = {};

    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function (data) {
        return data.reduce(sum) / data.length;
    };

    exports.stdDev = function (data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    };

    return exports;
}());


modules['calculadora.js'] = (function () {

    const exports = {};

    exports.multiplicar = function (x, y) { return x * y };
    exports.restar = function (x, y) { return x - y };
    exports.dividir = function (x, y) { return x / y };
    exports.sumar = function (x, y) { return x + y };

    return exports;

}());


const stats = require('stats.js');
console.log(stats.mean([1,2,3,9]));
//console.log(stats.stdDev([1,2,4,5,6]));

const calculadora = require('calculadora.js');
console.log(calculadora.sumar(1,4));










