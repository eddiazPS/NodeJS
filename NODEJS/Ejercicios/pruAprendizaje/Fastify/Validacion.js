/**
 * 
 *   validación de entrada y salida mediante el esquema JSON 
 *   realizar operaciones específicas antes de que se ejecute el controlador
 * 
 */
const fastify = require('fastify')({ logger: true })

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
       
      querystring: {
        name: { type: 'string' }
      },
       
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    },
    // this function is executed for every request before the handler is executed
    preHandler: async (request, reply) => {
      // E.g. check authentication
      console.log("# # #  preHandler # # # #");
    },
    handler: async (request, reply) => {
      return { hello2: 'Compañeros!!! Validacion Json propiedad hello' } //{ world : 'hello'}
    }
  })
  
  const start = async () => {
    try {
      await fastify.listen(3002)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()
