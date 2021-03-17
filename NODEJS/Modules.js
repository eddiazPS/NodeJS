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
     const square =(x)  => x*x;
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


 

const modulesq = {};

function require1(moduleName) {
    return modulesq[moduleName];
}

modulesq ['stats.js'] = (function () {
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


modulesq ['calculadora.js'] = (function () {

    const exports = {};

    exports.multiplicar = function (x, y) { return x * y };
    exports.restar = function (x, y) { return x - y };
    exports.dividir = function (x, y) { return x / y };
    exports.sumar = function (x, y) { return x + y };

    return exports;

}());


const stats = require1('stats.js');
console.log(stats.mean([1,2,3,9]));
//console.log(stats.stdDev([1,2,4,5,6]));

const calculadora = require1('calculadora.js');
console.log(calculadora.sumar(1,4));
 
//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* MODULOS EN ES6 ***************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************

/**
 * Modulos en ES6   EmaScript6    -> todos los navegadores menos   internet Explorer tienen las catualizaciones de ES6
 * palabra reserva Export
 * 
 * los modulos en ES6 son oficiales para la mayoria de navegadores menos internet explorer, los modulos en ES6 cada archivo tienen su contexto privado y se puede usar las declaraciones de importacion y exportacion, y por ultimo los modulos estan en modo extricto 
 *  
 */


export const PI1 = Math.PI;   // constante 
export function gradosAradianes1 (grados) {
  return grados * PI1/180;
}
export class Circle1 {
constructor (radio){
  this.radio = radio;
}
 area (){
  return Math.PI1* this.radio * this.radio;
 }
}

// segunada alternativa para exportar 

  const PI = Math.PI;   // constante 
  function gradosAradianes (grados) {
  return grados * PI/180;
}
class Circle {
 constructor (radio){
    this.radio = radio;
 }
 area (){
  return Math.PI* this.radio * this.radio;
 }
}
 // export es como un public en JAVA 
export {PI, gradosAradianes, Circle}

// en el caso de querer exportar un solo elemento utilizamos : lapalabra default funciona igual para funciones constantes, un default por modulo-> archivo como tal 
// la palabra clave export debe aparecer en el nivel superior de nuestro codigo JavaScript, no se puede usar dentro de una clase, dentro de un ciclo dentro de una funcion if

export default class Bitset {   } 
 //default se entiende que de todo el modulo se va a exportar esto , solo exportar una sola cosa


/*******************************************************************************************************************************
 * ****************************************IMPORT * EXPORT *********************************************************************
 * ***************************************************************************************************************************** 
 * import:  La palabra clave import importa los elementos exportados de los modulos 
 * 
 * 
*/


import BitSet1 from './calculadora.js';   // elemento exportados con default 

//import BitSet from './bitset.js'; 


//para poder importar un modulo con varios elementos 


import { mean , stdDev } from './stats.js';
import { multiplicar , dividir } from './calculadora.js';

/**
 * cosas importante para tener en cuenta , 
 * 1) las importaciones lo mismo que las exportaciones deven aparecer en el nivel superior. dentra de nada .
 * 2) por convencion las importaciones se colocan al inicio del modulo
 * 3) la comillas para la ruta del modulo ' "   pero `  no esta permitida
 * 4) para el directorio actual ./   o  .. /  anterior   o ruta absoluta  
 *  */ 
 
 //import * as stats from './bitset.js';// importa los elementos de un modulo 
 import * as statsImp from './calculadora.js';//


 statsImp.multiplicar(2,3);  //llamadp

/**
 * 
 * import para casos especiales en los que tenga un export default y otras exportaciones 
 * 
 * bistase.js   tenga default y otros elementos exportados 
 * 
 */

 import BitSet, {otroElementoExportado,otroSegundoElementoExportado} from './bitset.js';
 import BitSet, {otroElementoExportado,otroSegundoElementoExportado} from './calculadora.js';

 

 //archivo , modulo si export se importa asi:
 import './ArchivoSinExports.js';

console.log("hola");



/**
 * RENOMBRADO 
 * Importaciones exportaciones con el cambio de nombre 
 * util: modulos con elementos exportados con nombres iguales
 *  
 */

import { mean , stdDev } from './stats.js';
import { mean as meanOther , stdDev2 } from './OtherStats.js';

import {default as BitSet2 }    from "./bitst.js"     // importa renobrado para los defaults


/*tener encuenta con los exports 
 * 1 expreciones, por ejemplo Marh.cos   as   ....   no se permite dentro del export
*/


//RENOMBRADO EN LOS EXPORTS

export { PI_2 as NumeroPi , convertirGradosAradianes2 as convertir, Circle2 as Circulo  };
export { 
   PI_2 as NumeroPi ,
   convertirGradosAradianes2 as convertir,
   Circle2 as Circulo  
  };

/**
 *
 * Re-exports : re Exportaciones
 *
 * unir dos modulos en uno solo  
 * Re-export desde nuevo archivo stat.js 
 */
//_________________________________________________________
import { mean } from "./stats/mean.js";
import { stdDev } from "./stats/stdDev.js";

// Re-export desde un nuevo archivo
export {mean, stdDev };  
//_________________________________________________________
// Re-export desde los imports
export {mean} from '/stats/mean.js'
export {stdDev} from '/stats/stdDev.js'
//________________________________________________________
// Re-export de todos los elementos desde los imports
export * from '/stats/mean.js'
export * from '/stats/stdDev.js'


//RE-NOMBRADO DE LOS REEXPORTS 
// importar modulos re-exportados y renombrar 
import{mean,stdDev } from './stat.js';
import{mean as meanOther, stdDev } from './stat.js';

 


// Re-exportar elementos default 
export {default as mean } from 'stats/mean.js';
export {default as stdDev  } from 'stats/stdDev.js';

//default un elemento es la mas rapida
// si hacemos muchos re-exports el programa se vuelve un espaqueti
//import { multiplicar , dividir } from './calculadora.js';












//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* EJERCICIO  CON JAVA STANDAR LIBRAY* 16/03/2021********************************
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
  if (newpss.length < 6) throw new ErrorDeContraseña(-2, "El String de entrada, ninimo tiene que tener 6 caracters", newpss);
  if (newpss.length > 10) throw new ErrorDeContraseña(-3, "El String de entrada, maximo tiene que tener 10 caracters", newpss);
  ContraseñaDeSeguridad = newpss;
  if (numSeg == null) throw new ErrorDeContraseña(-4, "el numero de seguridad es obligatorio", newpss);
  // ARRAYS TIPO
  let more = new Uint8Array([12 * numSeg, 234 / numSeg, 45 - numSeg]);
  const reducer = (accumulator, currentValue) => accumulator + currentValue+ blindNum.numero2();  //***************************************MODULE
   let sumTipo = more.reduce (reducer);
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
  urlApi.searchParams.append("Historial",user);
  urlApi.searchParams.append("pssEncrip",PGPpss);
 // urlApi.searchParams.append("Costo",indi);    LA URL no acepta caracteres especiales
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
  console.log(NuevaContraseña('EdH.Yiopol',blindNum.initNum()));   //**********************************************************MODULE
} catch (error) {
  console.error("ErrorDeContraseña");
  console.error("codigo : " + error.codigo);
  console.error(error.descripcion);
  console.error("contraseña digitada: " + error.parametro);
  //console.error(error.stack);
}
},1000);  

setTimeout (()=>{clearInterval(clock);},2000);    // ************************************ TIMER














