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
     }); 
}

serve(process.argv[2] || "/tmp",parseInt(process.argv[3]) || 9001);


//  node EjemploHTTP.js     SIN ./
// http://localhost:9001/test/mirror


console.log("*************************NODE.JS*********************************");
