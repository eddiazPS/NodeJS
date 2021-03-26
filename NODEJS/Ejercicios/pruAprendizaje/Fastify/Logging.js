
const path = require ("path");
const fastify = require('fastify')({
  logger: {
    level: 'info',
    file: path.join(__dirname,"/logs/logs.log") 
  }
})


// Declare a route
fastify.get('/', async (request, reply) => {
  request.log.info('Some info about the current request**************************'+new Date());
    return { Hola : 'Compañeros', Ejemplo :" Loggin" }
  })


// Run the server!
const start = async () => {
    try {
      console.log("Start.listening...");
      await fastify.listen(3007)   
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()








