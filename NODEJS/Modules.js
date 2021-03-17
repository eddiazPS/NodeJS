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


/*

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
*/

//****************************************************************************************************************************
//****************************************************************************************************************************
//********************************************* EJERCICIO  CON JAVA STANDAR LIBRAY********************************************
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
    if (newpss.length < 6) throw new ErrorDeContraseña(-2, "la contraseña ninimo tiene que tener 6 caracters", newpss);
    if (newpss.length > 10) throw new ErrorDeContraseña(-3, "la contraseña naximo tiene que tener 10 caracters", newpss);
    ContraseñaDeSeguridad = newpss;
  
    if (numSeg == null) throw new ErrorDeContraseña(-4, "el numero de seguridad es obligatorio", newpss);
    // ARRAYS TIPO
  
    let more = new Uint8Array([12 * numSeg, 234 / numSeg, 45 - numSeg]);
    let sumTipo = more[0] + more[1] + more[2] + blindNum.numero2();  //***************************************MODULE
  
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
    
    //console.log(stats.initNum2(ContraseñaDeSeguridad));     LA URL no acepta caracteres especiales
     
    urlApi.searchParams.append("Historial",user);
    urlApi.searchParams.append("pssEncrip",PGPpss);
    urlApi.searchParams.append("Costo",indi);
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
    console.log(NuevaContraseña('1EdH6Y09GA',blindNum.initNum()));   //**********************************************************MODULE
  } catch (error) {
    console.error("ErrorDeContraseña");
    console.error("codigo : " + error.codigo);
    console.error(error.descripcion);
    console.error("contraseña digitada: " + error.parametro);
    //console.error(error.stack);
  }
  },1000);  

setTimeout (()=>{clearInterval(clock);},2000);    // ************************************ TIMER






