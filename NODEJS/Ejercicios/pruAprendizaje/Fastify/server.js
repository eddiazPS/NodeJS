
/**
 * https://www.fastify.io/
 * npm init
 * npm install fastify
 * npm install -g fastify
 * npm i fastify --save
 * 
 * Un servidor eficiente implica un menor costo de la infraestructura
 * Está inspirado en Hapi y Express
 * 
 * Funciones principales
 * Alto rendimiento  : frameworks web más rápido , dependiendo de la complejidad del código, podemos atender hasta 30 mil solicitud es por segundo.
 * Basado en esquema :  se recomienda usar JSON  para validar sus rutas y serializar sus salidas,  
 * Registro Logs     : los registros son extremadamente importantes pero costosos; ¡Elegimos el mejor registrador para casi eliminar este costo, Pino !
 * 
 * Inicio rápido
 * 
 */



// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })


// Declare a route
fastify.get('/hola', async (request, reply) => {
    return { Hola : 'Compañeros4', Servidor :"normalito" }
  })


// Run the server!
const start = async () => {
    try {
      await fastify.listen(3000)   
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()


