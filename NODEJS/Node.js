
/**
 * https://v8.dev/
 * 
 * encargado de que se imterprete el lenguaje en el navegador MOTOR DE JAVA SCRIPT  de google chrome   
 * 
 * 
 * https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey
 * 
 * motor de  morzilla    Spider Monkey
 * cd
 * 
 * node Js   corre en un sistema operativo 
 * 
 * 
 * entorno para secribir ser. web concurrentes  en un solo hilo 
 * 
 * * ejecutar el archivo 
 * node .\Node.js
 * 
 * *usar la consola para pasarle argumentos al node
 *  node --trace-uncaught Node.js --arg1 --arg2 nombre
 * 
 * * variables de entorno 
 * node -p -e "process.env"
 * 
 * * ejemplo archivos 
 * node switch.js
 * 
 * [MODULOS no cambian en node  require , porque node usa require y no import, Node existio antes que Js tuviera los modulos ya implementados ,requiere(importar) y export ]
 * 
 *Package.json ->  defie propiedades para cargar los modulos, fundamenal , organizacion con los modulos, usar modulos confiables 
 
 admin packetes de node google npm
 */
//console.log("Hola");
console.log(process.argv);

//   MODULO 1
//https://www.npmjs.com/package/sort-keys

// MODULO 2
//https://github.com/Siilwyn/css-declaration-sorter

//https://www.npmjs.com/package/typescript
//https://www.npmjs.com/package/nodemon


/**Buffers 
 * 
 * tipo de datos que nos ayuda a leer datos de archivos o de la red.
 *  es una secuencia de bytes en lugar de una secuencia de caracteres. Buffer es una subclase Uint8Array. 
 *  Buffer esta diseñado para operar con cadenas de JavaScript, esto significa que se puden inicializar a partir de cadenas de caracres o 
 * cpnvertirce a cadenas de carcteres.
 * 
 * Caracteristicas del buffer:
 * 1- Asigna a cada caracter un numero entero 
 * 
 * las codificaciones que admite el buffer en node js   
 * **'UTF-8' valor por defecto unicode  
 * ** UTF-16LE: Unicode de dos bites es mas amplio
 * ** Latin1 : para idiomas de europa Occidental
 * ** ASCII: tabla ASCII, 7 bits
 * ** Hexadecimal: Convierte cada byte en un par de digitos hexadecimals de ASCII
 * ** Base64 : convierte cada secuencia de 3 byte en una secuencia de 4 caracteres ASCII
 * 
 * */ 

//https://www.utf8-chartable.de/unicode-utf8-table.pl?utf8=0x
let buffer = Buffer.from([0x41,0x42,0x43]);
console.log(buffer.toString());
console.log(buffer.toString("hex"));




// string a buffer que maneje ASCII
let computer = Buffer.from("IBM 3111","ascii");
console.log(computer.toString("ascii"));
console.log(computer.subarray(0,3).map(x=> x+1).toString());



for (let i = 0 ; i < computer.length; i++){
    computer[i]--;
}

console.log(computer.toString("ascii")); //toString()


// crear buffer vacios si estan inicializados, usamos unas funciones 
let ceros = Buffer.alloc(1024)  // cantidad de ceros 1024
console.log(ceros);


let unos = Buffer.alloc(1024,1);  // como segundo argumento 1
console.log(unos);

let patterns = Buffer.alloc(1024,"DBEF","hex");  // patron de bytes 
console.log(patterns);

const EventEmitter = require('events');
// codificar leer archivos, manipular archivos en el SO  o mediante la red, es + para codificar y decodificar protocolos TCP UDP




/**
 * 
 * EVENTOS 
 * 
 * usar un modulo 
 * 
 * se lance un evento cuando el cliente se conecta...
 * 
 * 
 * 
 */


 const eventEmitter = require ('events');
 const  net  = require ('net');         

let server = new net.Server();
console.log(server instanceof EventEmitter);   
// EventEmitter , documentacion para los eventos espesificos https://nodejs.org/api/events.html 
// add event listener -> on 

server.on('connection',socket => {    //(nombre del evento que se va alanzar , lambda )
    socket.end("hello word !!!","utf-8") // evento con on -> escucha   caundo se conecte manda el console  y se desconecta 
});


/**
 * 
 * Streams
 * 
 * natural mente estan por el procesamiento de datos, se hace mediante un modulo fs, 
 * 
 * 
 * transformadores - puente 
 * 
 * transmisores - java 
 * 
 * Streams
 * readable:  legible : son streams fuentes de datos. Esto devuelve un Fs.createReadString   
 * writeable: receptores o destinatarios de datos. Esto devuelve un fs.createWriteString
 * Duplex:    combinan readable con el writeable
 * transform: transformadores pueden leer y escribir se diferencian de los Duplex en un flujo de datos se transforman solo legibles (Readble)
 * 
 * leemos -> pipe -> red 
 * 
 */

const fs = require ('fs');

function pipeFileToSocket (fileName,socket){
 fs.createReadStream(fileName).pipe(socket);
}


/**
 * process 
 * 
 * arch arquitectura cpu
 * cwd directorio de trabajo actual
 * chdir  setitar el directorio de trabajo actual
 * cpuUsage reporte uso de la CPU
 * 
 */
console.log(process.argv);
console.log(process.arch);
console.log(process.cwd());
//console.log(process.chdir());
console.log(process.cpuUsage());
console.log(process.env);


const os = require ('os');
console.log(os.arch());
console.log(os.cpus());
console.log(os.type());  // tipo sistema operativo
