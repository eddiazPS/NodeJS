const fastify = require('fastify')({ logger: true })


fastify.get('/', async (request, reply) => {
    return { Hola : 'Compañeros', Buenas :"tardes" , Cambio :"de Host" }
  })


fastify.listen(3004, '127.0.1.1', function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })