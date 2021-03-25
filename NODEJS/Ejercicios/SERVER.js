
const http = require('http'); // Usar HTTPS si se tiene un certificado
const url = require('url'); // Para analizar Urls
const path = require('path'); // Para manipular rutas de sistemas de archivos
const fs5 = require('fs'); // Para leer archivos
const { type } = require('os');

function serve(rootDirectory, port) {
    let serv = new http.Server(); // Se crea un nuevo servidor http
    serv.listen(port); // Escucha en el puerto especificado
    console.log(`Listening on port: ${port}`);

    serv.on("request", (request, response) => { // Cuando lleguen solicitudes las manipulamos con esta función
        let endpoint = url.parse(request.url).pathname; // Obtiene la ruta de la url que trae la solicitud.
        // se ignora los parametros de consulta que se le agregue
        if (endpoint === "/test/mirror") {
            response.setHeader("Content-Type", "text/plain; charset=UTF-8");
            response.writeHead(200); //Especifica el codigo de estado de la respuesta (200 - OK)
            response.write(`${request.method} ${request.url} HTTP/${ // Esto es el cuerpo de la respuesta
                request.httpVersion
                }\r\n`);
            let headers = request.rawHeaders;
            for (let i = 0; i < headers.length; i += 2) {
                response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
            }
            response.write("\r\n"); // Finalizar los headers con una linea en blanco
            request.pipe(response); // Copiamos cualquier cuerpo del request al cuerpo del response, dado que ambos son flujos
        }
        else if (endpoint === "/test/file") {
            let fileName = process.argv[2];
            fileName = fileName.replace(/\.\.\\/g, ""); // No va a permitir ../ dentro de una ruta, lo va a cambiar
            fileName = path.resolve(rootDirectory); // Convertimos una ruta relativa a una ruta absoluta
            let typeFile;

            switch (path.extname(fileName)) {
                case '.html':
                case '.htm':
                    typeFile = 'text/html';
                    break;
                case '.js':
                    typeFile = 'text/javascript';
                    break;
                case '.css':
                    typeFile = 'text/css';
                    break;
                case '.png':
                    typeFile = 'image/png';
                    break;
                case '.txt':
                    typeFile = 'text/plain';
                    break;
                default:
                    typeFile = 'application/octet-stream';
                    break;
            }

            let stream = fs5.createReadStream(fileName);
            stream.once('readable', () => {
                response.setHeader('Content-Type', typeFile);
                response.writeHead(200);

                stream.pipe(response);
            });
            stream.on('error', (err) => {
                //console.log(err));
                response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
                response.writeHead(404); // Codigo not found
                response.end(err.message);
            });

        }
    });

}

serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);