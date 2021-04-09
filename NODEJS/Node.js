console.log("go");


/**
 * https://v8.dev/
 * encargado de que se imterprete el lenguaje en el navegador MOTOR DE JAVA SCRIPT  de google chrome   
 * 
 * 
 * https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey
 * motor de  morzilla    Spider Monkey
 * cd
 * 
 * node Js   corre en sistema operativo 
 * 
 * 
 * entorno para escribir en seridores web concurrentes  en un solo hilo 
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
console.log("Hola");

//The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. 
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
 * convertirce a cadenas de carcteres.
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
let buffer = Buffer.from([0x49,0x42,0x43,0x33]);
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString("hex"));

let data55 = 'c3RhY2thYnVzZS5jb20=';
let buff = new Buffer.from(data55, 'base64');
console.log (buff);
let text55 = buff.toString('ascii');
console.log('"' + data55 + '" converted from Base64 to ASCII is "' + text55 + '"');

// string a buffer que maneje ASCII
let computer = Buffer.from("IBM 3111","ascii");
console.log(computer.toString("ascii"));
console.log(computer.subarray(0,3).map(x=> x+1).toString());
console.log(computer.toString());

for (let i = 0 ; i < computer.length; i++){
    computer[i]--;
}

console.log(computer.toString("ascii")); //toString()

//toString
const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);
//buf1[0] = 0x61;
console.log(buf1.toString());
console.log(buf1.toString("ascii"));
// Prints: auffer
console.log(buf2.toString("utf-8"));
// Prints: buffer


// crear buffer vacios si estan inicializados, usamos unas funciones 
let ceros = Buffer.alloc(1024)  // cantidad de ceros 1024
console.log(ceros);


let unos = Buffer.alloc(1024,1);  // como segundo argumento 1
console.log(unos);

let patterns = Buffer.alloc(1024,"DBEF","hex");  // patron de bytes 
console.log(patterns);

//const EventEmitter = require('events');
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

  
 const EventEmitter = require ('events');

 const  net  = require ('net');         

let server = new net.Server();
console.log(server instanceof EventEmitter);   
// EventEmitter , documentacion para los eventos espesificos https://nodejs.org/api/events.html 
// add event listener -> on 

server.on('connection',socket => {    //(nombre del evento que se va alanzar , lambda )
    socket.end("hello word !!!","utf-8") // evento con on -> escucha   caundo se conecte manda el console  y se desconecta 
});

//https://nodejs.org/api/events.html#events_handling_events_only_once

const myEmitter = new EventEmitter();
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2


 
 m = 0;
myEmitter.once('event', (x,y) => {
  console.log(x+y+" " +m);
});
myEmitter.emit('event',2,2);
// Prints: 1
myEmitter.emit('event');
// Ignored




//const EventEmitter = require('events');
//const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);


// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener



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

let stream = fs.createReadStream('./OrigCopy2.txt','UTF-8');

let data1 = '';

stream.once('data1',()=>{
    console.log('iniciando \n');

});


stream.on('data1',chunk=>{
   // console.log(`${chunk.length} | `);
    data1 += chunk;
});

stream.on('end',()=>{
    console.log('fin \n');
    console.log(data1.length);


});



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



 

console.log("####### PROCESS ###########");
console.log(process.argv); // Una matriz de argumentos de la línea de comandos.
console.log(process.arch); // La arquitectura de la CPU: "x64", por ejemplo.
console.log(process.cwd()); // Devuelve el directorio de trabajo actual.
console.log(process.chdir(".")); // Establece el directorio de trabajo actual.
console.log(process.cpuUsage ()); // Informa el uso de la CPU.
console.log(process.env); // Un objeto de variables de entorno.
console.log(process.execPath); // La ruta absoluta del sistema de archivos al ejecutable del nodo.
console.log(process.exit ()); // Termina el programa.
console.log(process.exitCode); // Un código entero que se informará cuando se cierre el programa.
console.log(process.getuid ); // Devuelve el ID de usuario de Unix del usuario actual.
console.log(process.hrtime.bigint ()); // Devuelve una marca de tiempo de nanosegundos de "alta resolución".
//console.log(process.kill ()); // Envía una señal a otro proceso.
//console.log(process.memoryUsage ()); // Devuelve un objeto con detalles de uso de memoria.
///**/console.log(process.nextTick ()); // Como setImmediate (), invoca una función pronto.
console.log(process.pid); // El ID de proceso del proceso actual.
console.log(process.ppid); // El ID del proceso padre.
console.log(process.platform); // El sistema operativo: "linux", "darwin" o "win32", por ejemplo.
console.log(process.resourceUsage ()); // Devuelve un objeto con detalles de uso de recursos.
//console.log(process.setuid ()); // Establece el usuario actual, por id o nombre.
console.log(process.title); // El nombre del proceso que aparece en los listados `ps`.
//console.log(process.umask ()); // Establece o devuelve los permisos predeterminados para nuevos archivos.
console.log(process.uptime ()); // Devuelve el tiempo de actividad de Node en segundos.
console.log(process.version); // Cadena de versión de Node
console.log(process.versions); // Cadenas de versión para las bibliotecas de las que depende Node.

console.log("####### OS ###########");
console.log(os.arch()); // Devuelve la arquitectura de la CPU. "x64" o "arm", por ejemplo.
console.log(os.constants); // Constantes útiles como os.constants.signals.SIGINT.
    console.log(os.cpus()); // Datos sobre los núcleos de la CPU del sistema, incluidos los tiempos de uso.
    console.log(os.endianness()); // El endianness nativo de la CPU "BE" o "LE".
    console.log(os.EOL); // El terminador de línea nativo del sistema operativo: "\ n" o "\ r \ n".
    console.log(os.freemem()); // Devuelve la cantidad de RAM libre en bytes.
    console.log(os.getPriority()); // Devuelve la prioridad de programación del sistema operativo de un proceso.
    console.log(os.homedir()); // Devuelve el directorio de inicio del usuario actual.
    console.log(os.hostname()); // Devuelve el nombre de host de la computadora.
    console.log(os.loadavg() );// Devuelve los promedios de carga de 1, 5 y 15 minutos.
    console.log(os.networkInterfaces ()); // Devuelve detalles sobre la red disponible. conexiones.
    console.log(os.platform()); // Devuelve OS: "linux", "darwin" o "win32", por ejemplo.
    console.log(os.release() );// Devuelve el número de versión del SO.
    //console.log(os.setPriority()); // Intenta establecer la prioridad de programación para un proceso.
    console.log(os.tmpdir()); // Devuelve el directorio temporal predeterminado.
    console.log(os.totalmem()); // Devuelve la cantidad total de RAM en bytes.
    console.log(os.type()); // Devuelve SO: "Linux", "Darwin" o "Windows_NT", p. ej.
    console.log(os.uptime()); // Devuelve el tiempo de actividad del sistema en segundos.
    console.log(os.userInfo()); // Devuelve uid, nombre de usuario, inicio y shell del usuario actual.






/** 
 * Manejo de archivos  MODULO  fs    ->  File Sistem 
 * 
 * Api para trabajar con archivos y directorios 
 * fs.readfile()->fs.readFileSync()
 * fs.Promises.readFile() despues de la version 10 denode
 * 
 * PATHS
 * estudiaremos las rutas  Paths
 * 
 */
const path = require ("path");
console.log(path.sep);  // el / o \ de la ruta segun el sistema operativo 
let directorio = "src/pkg/test.js"
console.log(path.basename(directorio));


console.log(process.cwd)
console.log(__filename); // ruta absoluta actual del archivo que contiene el codigo actual es decir Node.js
console.log (__dirname);// ruta del directorio actualque contiene el file name
console.log(os.homedir()); // Devuelve el directorio de inicio del usuario actual.
console.log(path.extname(directorio));
console.log(path.dirname(directorio));
console.log(path.basename(path.dirname(directorio)));

// Normalize

console.log(path.normalize("a/b/c/../d/"));

console.log(path.normalize("a/./b"));
    console.log(path.normalize("//a//b//"));

// Joins 

console.log(path.join("src","pkg","y.js"));

//resolve

console.log(path.resolve()); // simialr aprocess cwd()
console.log(path.resolve("t.js")); // es igual a path.join (process.cwd(),"t.js") 
console.log(path.resolve("/tmp","t.js"));
console.log(path.resolve("/a","/b","t.js"));

console.log(path.posix); // linux 


// preguntar si el sistema es linux o windows   los comandos cambian 
// contenedores siempre estaran bajo linux





/**
 * 
 * LECTURA DE ARCHIVOS 
 * 
 */


const fs2 = require ('fs');

let buffer2 = fs2.readFileSync(path.join(__dirname,"fs.txt"));
console.log(buffer2);

let text = fs2.readFileSync(path.join(__dirname,"fs.txt"),"utf-8");
console.log(text);

// lectura de forma asincrona con callbacks  
fs2.readFile(path.join(__dirname,"fs.txt"),(err,buffer)=> {
if(err){
console.log(`Error ${err}`);
}else{
console.log(` ok ${buffer}`);
}
});

// lectura con promesas 


fs.promises.readFile(path.join(__dirname,"fs.txt"),"utf-8").then(processFileText => {
    console.log(processFileText);
}).catch(handleReadError => {
     console.log(handleReadError)
});



//  Async Await 

async function processTest (fileName , encoding="utf-8"){
let test2 = await fs2.promises.readFile (fileName,encoding);
console.log(test2);
}

processTest(path.join(__dirname,"fs.txt"));




/**
 * DESCRIPTORES
 * Salida estandar a nivel de contenedores 
 * 
 * No usar  archivos para poner logs en un contenedor use log4J
 * 
 * salida estandar
 * stdOut
 * 
 * Herramientas de monitoreo
 * Kibana
 * Cloud Trail
 * Grafana      https://hub.docker.com/r/grafana/grafana
 * Prometheus   https://hub.docker.com/r/prom/prometheus
 */



function printFile(fileName,encoding ="utf8"){
fs.createReadStream(fileName,encoding).pipe(process.stdout);
}
printFile(path.join(__dirname,"fs.txt"));


//esribir archivos 

//sincrona - "configuracion.json"

let configuracion = {nombre: "juan",apellido : "Perez" };

fs.writeFileSync(path.resolve(__dirname,"configuracion.json"),JSON.stringify(configuracion));


//asincrona con callback  - "configuracion2.json"
fs.writeFile(path.resolve(__dirname,"configuracion2.json"), JSON.stringify(configuracion), err =>{
    if (err){
        console.log(err);
     }else{
        console.log("El archivo ha sido escrito exitosamente ");
     }
});



//agregar al final del archivo de forma asincrona con callback
fs.appendFile(path.resolve(__dirname,"configuracion.json"), " 1) fs.appendFile - asincrono con callback" , err=>{
 if (err){
    console.log(err);
 }else{
     let configuracionTest = fs.readFileSync(path.resolve(__dirname,"configuracion.json"),"utf8");
     console.log(configuracionTest);
 }
});

//tarea
// fs.appendFileSync
fs.appendFileSync(path.resolve(__dirname,"configuracion.json"), " 2)  appendFileSync " ,err=>{
    if (err){
       console.log(err);
    }else{
        console.log("si");
        let configuracionTest2 = fs.readFileSync(path.resolve(__dirname,"configuracion.json"),"utf8");
        console.log(configuracionTest2);
    }
   });
 

// fs.promises.appendFile
fs.promises.appendFile(path.join(__dirname,"configuracion.json")," 3) fs.promises.appendFile").then(() => {
    console.log("Archivo modificado");
}).catch(handleReadError => {
     console.log(handleReadError)
});



// fs.write con Asyn await y promises 
// regla: simpre debe colar en un try catch 
let data = "async function promises.writeFile";




async function writeProcessTest (fileName ,datos, encoding="utf-8"){
    try {
        let test2 = await fs2.promises.writeFile (fileName,datos,encoding);
        console.log(test2);
    } catch (error) {
        console.log(error);
    }
}
    
    writeProcessTest(path.join(__dirname,"fs.txt"),data);


/**
 * 
 * se debe usar sincrono cuando el archivo es pequeño muchos recursos en el servidor 
 * se debe usar asincrono cuando el archivo   es grande y pocos recursos en el servidor 
 * elegir callbacks promesas  o async await(epera)  
 * 
 */



 /**
  * METADATOS DE LOS ARCHIVOS 
  * 
  * 
  */
let stats = fs.statSync(path.join(__dirname,"fs.txt"));

console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.size);  // tamaño en bytes
console.log(stats.atime);//accesTime  fecha ultima vez que fue leido
console.log(stats.mtime);//modification time 
console.log(stats.uid);// retoran id dueño del archivo
console.log(stats.gid);/// retorna id grupo dueño del archivo
console.log(stats.mode.toString(8)); // imprime octal en string de los permisos del archivo

/**copia de archivos */
/*
fs.copyFileSync(path.join(__dirname,"Original.txt"),path.join(__dirname,"OrigCopy2.txt"));

let output = fs.createWriteStream( path.join(__dirname,"fs.txt") ); 
for (let i = 0; i <= 100; i++) {
    output.write(`${i} \n`);
    
}
console.log(output.end);
*/



//################################################################################################################
//################################################################################################################
//############################################ HTTP, HTTPS, HTTP2 ################################################
//################################################################################################################
//################################################################################################################


/**
 * HTTP, HTTPS, HTTP2
 * 
 * son los modulos por E de NODE son la omplementacion de modulos de HTTP
 * implementaciones de bajo nivel 
 * 
 * 1. crear un objeto de servidor 
 * 2. llamara a listener para que escuchen solicitudes de un puerto espesifico
 * 3. registrar un contenedor de eventos para eventos de request
 * 
 * 
 */


const http = require ('http'); // usar HTTPS si se tiene un certificado
const url =  require('url'); // para analizar urls
const path3 = require('path'); // para manipular rutas del file sistem
const fs5 = require('fs'); // para leer archivos  
const { Http2ServerRequest } = require('http2');


function serve (rootDirectory , port){
    let server =new http.Server(); // se crea un nuevo servidor http
    server.listen(port);           // ecucha en el puerto espesificado 
    console.log(`Listening on port ${port}`);

     server.on("request",(request , response) =>{   // cuando llegen solicitudes las manipulamos con esta funcion
        let endpoint = url.parse(request.url).pathname; // obtiene la parte de la ruta de la url que trae la solicitud y se ignora los parametros de consulta que se le agregen             
        
        if (endpoint === "/test/mirror"){
            response.setHeader("Content-Type","text/plain; charset = UTF-8");
            response.writeHead(200);                //espesifica el codigo de estado de la respuesta (200 ok)
            response.write(`${request.method} ${request.url} HTTP/${  // cuerpo de la respuesta 
                request.httpVersion
            }\r\n`);
            let headers = request.rawHeaders;
            for (let i = 0; i < headers.length; i+= 2) {
                response.write(`${headers[i]}: ${headers[i+1]} \r\n`); 
            }
            response.write ("\r\n");    // finalizar los header como una linea en blanco
            request.pipe(response);     // copiamos cualquier cuerpo del requuest al cuerpo del response dado que ambos son flujos. 
        }
        else if (endpoint === '/test/file'){
             let fileName = endPoint.substring(1);
             fileName = fileName.replace(/\.\.\\/g,"");  // no permite ../   lo cambia por vacio 
             fileName = path3.resolve(rootDirectory,fileName ); //  convertimos una ruta relativa a una ruta absoluta 
             let typeFile ;

             switch(path3.extname(fileName)){
                case '.html' :
                case '.htm'  :
                    typeFile= 'text/html';
                    break;    
                case '.js'   :
                    typeFile = 'text/javascript';
                    break;
                case '.css'   :
                    typeFile = 'text/css';
                    break;
                case 'png'    :
                    typeFile = 'text/png';
                    break;
                case 'txt'    :
                     typeFile = 'text/plain';
                     break;
                 default:
                     typeFile ='application/octet-stream';
                     break;        
             } 
             let stream = fs5.createWriteStream(fileName); 
             stream.once('readable', ()=>{
                 response.setHeader('Content-Type',typeFile);
                 response.writeHead(200);

                 stream.pipe(response);
             }); 
             stream.on('error',(err)=>{
                 response.setHeader('Content-Type','tex/plain; charset UTF-8');
                 response.writeHead(404); // codigo no found
                 response.end(err.message);
             });
        }
     }); 
}

serve(process.argv[2] || "/tmp",parseInt(process.argv[3]) || 9002);

 //  node EjemploHTTP.js
 // http://localhost:9001/test/mirror














console.log("*************************NODE.JS*********************************");
