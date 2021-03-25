
/**
 * Funciones principales
 * Alto rendimiento - frameworks web más rápidos de la ciudad, dependiendo de la complejidad del código, podemos atender hasta 30 mil solicitud es por segundo.
 * Basado en esquema: incluso si no es obligatorio, recomendamos usar JSON Schema para validar sus rutas y serializar sus salidas, 
 * Registro: los registros son extremadamente importantes pero costosos; ¡Elegimos el mejor registrador para casi eliminar este costo, Pino !
 * 
 * Inicio rápido
 * 
 */



// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })


// Declare a route
fastify.get('/', async (request, reply) => {
    return { Hola : 'Compañeros', Buenas :"tardes" }
  })


// Run the server!
const start = async () => {
    try {
      await fastify.listen(3003)   
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()


