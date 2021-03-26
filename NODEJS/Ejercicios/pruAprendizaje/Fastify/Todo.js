
const path = require ("path"); //****************************************************** */
const fastify = require('fastify')({ logger:{
    level: 'info',
    file: path.join(__dirname,"/logs/logs2.log")
  }
 })

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
    preHandler: async (request, reply) => {
      console.log("# # #  preHandler # # # # check authentication");
    },
    handler: async (request, reply) => {
        request.log.info('Some info about the current request**************************'+new Date());
        reply.log.info('Some info about the current replay-----------------------------'+new Date());
      return { hello: 'Compañeros!!! Validacion Json y Logs' }  
    }
  })


// Run the server!
const start = async () => {
    try {
      console.log("Start.listening...");
      await fastify.listen(4004)   
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()
