

//   

/**
 * ASINCRONIA 
 * 
 * fundamentalmente  la programacion asicronica    en js se realiza  con devoluciones de llamada (CallBack)
 * 
 * Callback:  es una funcion que se crea y luego se pasa (como argumento) a otra funcion. 
 * pero esta otra funcion ejecuta invoca(devuelve la llmada) a nuestra funcion cuando se cumple una condicion,
 *  o se produce un evento , este evento es asincrono.
 * 
 * La invocacion de la funcion de devolucion de llamada notifica la condicion o el evento.
 * 
 * 
 * 
 * */

 

function cuadrado (x){
    return x*x;
    }
    console.log("antes");
    console.log(cuadrado(8));
    console.log("despues");
    
    console.log("----------------------------------");
    function cuadradoConAsync(x, callback){
    setTimeout(()=>callback(x*x),100);   // segundo plano corre el tiempo y despues ejecuta una vez
    }
    console.log("antes");
    console.log(cuadradoConAsync(4, resultado => console.log(`resultado ${resultado}`)));
    console.log("despues");


    // callback  devolucion de la llamda despues de la ejecucion 


//////////// eliminar el detalle de las dependencias en los clallBacks //////////////////
// escondemos la dependencia 
let secondsA =30;

function comenzarCuentaRegresivaA (callback){
    setInterval(()=>{   //(comment) lo ejecuta cicilcamente infinito 
        secondsA--;
       callback(); // mostarSegundos();
    },1000);
}

function mostarSegundosA (){
    console.log(secondsA);

}

//comenzarCuentaRegresiva(mostarSegundosA);
//*(coment)eliminamos el conosiiento de mostarr segundos Se elimina la dependencia con callback 
//comenzarCuentaRegresiva(mostarSegundosA);//comenzarCuentaRegresivaA();


//Eliminar el detalle de las dependencias en los callback

let segundos = 3;

function iniciarCuentaRegresiva() {
    setInterval(() => {
        segundos--;
        if (segundos > 0) {
            mostrarSegundos();
        }
    }, 1000);
}
function mostrarSegundos() {
    console.log(segundos);
}
//iniciarCuentaRegresiva();

let segundos2 = 5;

function iniciarCuentaRegresiva2(callback) {
    setInterval(() => {
        segundos2--;
        if (segundos2 > 0) {
            callback();
        }
    }, 1000);
}
function mostrarSegundos2() {
    console.log(segundos2);
}
//iniciarCuentaRegresiva2(mostrarSegundos2);





/**
 * 
 * la evolucion del callack (callback Hell) cuando se hace abuso del clall back, de multiple funciones 
 *
 * Errores con los callbacks: manejo de errores  
 *  
 */
// tener claro que existe una repercucion en el flujo de la de forma asyncronia 


/**
 * Errores con callbacks  No se ejecuta el segundo lector 
 * 
 */

import { readFile } from 'fs';

const CACHE = new Map();

function lecturaInconsistente(nombreArchivo, callback) {
    if (CACHE.has(nombreArchivo)) {
        callback(CACHE.get(nombreArchivo));
    } else {
        readFile(nombreArchivo, 'utf8', (err, data) => {
            CACHE.set(nombreArchivo, data);
            callback(callback);
        });
    }
}

function crearLectorDeArchivo(nombreArchivo) {
    const LISTENERS = [];
    lecturaInconsistente(nombreArchivo, valor => LISTENERS.forEach(listener => listener(valor)));
    return { onDataReady: listener => LISTENERS.push(listener) };
}

const LECTOR1 = crearLectorDeArchivo('data.txt');
LECTOR1.onDataReady(data => {
    console.log(`Primera llamada a data ${data}`);
    const LECTOR2 = crearLectorDeArchivo('data2.txt');
    LECTOR2.onDataReady(data => console.log(`Segunda llamada a ${data}`));
});


//callback hell: cuando se hace abuso del callback, de multiples funciones.

function comprarEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 1;
    callback(empanadas);
}
function comprarTresEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 3;
    callback(empanadas);
}
function comprarCincoEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 5;
    callback(empanadas);
}

let empanadas = 0;
comprarEmpanadas(empanadas, primeraCompra => {
    console.log(`Empanadas: ${primeraCompra}`);
    //Me ha gustado quiero 3 mas!
    comprarTresEmpanadas(primeraCompra, segundaCompra => {
        console.log(`Empanadas ${segundaCompra}`);
        //Me ha gustado quiero 5 mas!
        comprarCincoEmpanadas(segundaCompra, terceraCompra => {
            console.log(`Empanadas ${terceraCompra}`);
        });
    });
});
/**
 * 
 * PROMESAS
 * 
 * estandar ES6
 * esperamos que se cumpla , si no se cumple es porque se ha rechasado una promesa 
 * legibilidad del codigo
 * 
 * 
 * 
 * las promesas son un objeto que evuelven nuestro return . se manjan varios estados 
 * estado: resuelto
 * estado:rechasasdo
 * 
 */
function comprarEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 1;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

function comprarTresEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 3;
    let promesa;
    return promesa = new Promise((resolve) => resolve(empanadas));
}

function comprarCincoEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 5;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}
let empanadasConPromesas = 0;

//el llamado es muy similar al anterior, esto se soluciona con Async
comprarEmpanadasConPromesas(empanadasConPromesas)
    .then(
        resultado => {
            console.log(`Empanadas: ${resultado}`);
            //Me ha gustado quiero 3 mas!
            comprarTresEmpanadasConPromesas(resultado)
                .then(resultado => {
                    console.log(`Empanadas: ${resultado}`)
                    //Me ha gustado quiero 5 mas!
                    comprarCincoEmpanadasConPromesas(resultado)
                        .then(resultado => {
                            console.log(`Empanadas: ${resultado}`)
                        });
                });
        }
    );



 
 
/**
 * 
 * Async Await
 * 
 * 
 * 
 */


function comprarEmpanadasConAcync (empanadasActuales){
    const empanadas = empanadasActuales+1;
    let promesa;
return promesa= new Promise((resolve)=>resolve(empanadas));
}

function comprarTresEmpanadasConAcync (empanadasActuales){
    const empanadas = empanadasActuales+3;
    let promesa;
return promesa= new Promise((resolve)=>resolve(empanadas));
}


function comprarCincoEmpanadasConAcync (empanadasActuales){
    const empanadas = empanadasActuales+5;
    let promesa;
return promesa= new Promise((resolve)=>resolve(empanadas));
}



let empanadasAsync = 0;

async function comprar (){
    const primerCompra = await comprarEmpanadasConAcync(empanadasAsync);
    console.log(`empanadas :  ${primerCompra}`);
    const segundaCompra = await comprarTresEmpanadasConAcync(primerCompra);
    console.log(`empanadas :  ${segundaCompra}`);
    const terceraCompra = await comprarCincoEmpanadasConAcync(segundaCompra);
    console.log(`empanadas :  ${terceraCompra}`);
}


comprar ();




// EJERCICIO ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * Animacion :  LOS PASOS DEL HOMBRE INVISIBLE - NO LO HAN PODIDO PARAR
 * por: @Ehdm
 *  
 */

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
setTimeout(()=>{console.clear();console.log("\n\n\n                                             ####  FIN  ####")} ,9000  );
let clock1 = setInterval(()=> {
    console.log("!üü! --------------------------------------------------------------------------------->");    
  },3000);  
setTimeout (()=>{clearInterval(clock1);},6000);
let clock = setInterval(()=> {
    console.log("                         <------------------------------------------------------------------------------------------------!OO!");    
  },2500);  
setTimeout (()=>{clearInterval(clock);},5000);
    console.log("             Å Å Å Å Å Å Å LOS PASOS DEL HOMBRE INVISIBLE - NO LO HAN PODIDO PARAR Å Å Å Å Å Å  ");   // Tiempo = 0,01
    sleep(700);
    [1,2,3].forEach(function (i){
    console.log("           W#################################################################################W "+[i]);
});
[1,2,3,4,5,6,7,8,9].forEach(function (i){
    console.log("           w###################                                           ###################w "+[i]);
});
    console.log("           w###################                 V                         ###################w ");
setTimeout(function cb(){
    console.log("                                           .  ");console.log("                                                  .  ");
    
},1000);
setTimeout(function cb(){
    console.log("                                         o  ");
        },2000);
        setTimeout(function cb(){          
console.log("                                                   o  ");
        },2200);
        setTimeout(function cb(){
            console.log("                                        o  ");
        },2500);
        setTimeout(function cb(){
console.log("                                                    O  ");
        },3000);
        setTimeout(function cb(){
               console.log("                                      O  ");
        },3500);
        setTimeout(function cb(){
console.log("                                                      O  ");
        },4000);
        setTimeout(function cb(){
                    console.log("                                   O  ");
        },4500);
        setTimeout(function cb(){
console.log("                                                         O  ");
        },5000);
        setTimeout(function cb(){
                       console.log("                                 O  ");
        },5500);





