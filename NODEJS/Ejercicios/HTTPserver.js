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
        else  if (endpoint === '/test/file')
        {
              let fileName = process.argv[2];  //endPoint.substring(1)
             fileName = fileName.replace(/\.\.\\/g,"");  // no permite ../   lo cambia por vacio 
             fileName = path3.resolve(rootDirectory); //  convertimos una ruta relativa a una ruta absoluta 
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
                    typeFile = 'image/png';
                    break;
                case 'txt'    :
                     typeFile = 'text/plain';
                     break;
                 default:
                     typeFile ='application/octet-stream';
                     break;        
             } 
             let stream = fs5.createReadStream(fileName); 
             stream.once('readable', ()=>{
                 response.setHeader('Content-Type',typeFile);
                 response.writeHead(200);

                 stream.pipe(response);
             }); 
             stream.on('error',(err)=>{
                 response.setHeader('Content-Type','text/plain; charset=UTF-8');
                 response.writeHead(404); // codigo no found
                 response.end(err.message);
             });
        }
     }); 
}

serve(process.argv[2] || "/tmp",parseInt(process.argv[3]) || 9004);



//C:\Users\eddiaz\Documents\GitHub\NodeJS\NODEJS\Ejercicios\index.html
// node HTTPserver.js C:\Users\eddiaz\Documents\GitHub\NodeJS\NODEJS\Ejercicios\index.html\index.html 