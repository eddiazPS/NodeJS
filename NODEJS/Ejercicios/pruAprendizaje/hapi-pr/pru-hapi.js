/***
 * 
 * hapi: A rich framework for building applications and services that enables developers to focus on writing reusable application logic instead of spending time building infrastructure.

https://hapi.dev/
 * 
 * 
 * REPO MIGUEL  https://github.com/Miguel1349/NodeJS_BIT/tree/main/NodeJS/projectWithHapi
 * 
 */


'use strict'

const { server } = require('@hapi/hapi');


const hapi = require ('@hapi/hapi');

const init = async ()=> {
//const server = hapi.Server({port : 3000 , host : 'localhost'});
server.route({
    method : 'GET',
    path:'/test{param}',
    handel : (req,h)=> {
        console.log(req.param);
        return `Hola ${req.params.param.toUpperCase()}`
    }
});

server.route({
    method : 'GET',
    path:'/redirect',
    handel : (req,h)=> {
        console.log('redireccionamiento desde hapi');
        return  h.redirect('/test/edgar');
    }
});


server.route({
    method : 'GET',
    path : '/user',
    handler: (req , h )=>{
        const obj = {name : "Edgar"};
        return obj;
    }
});

server.ext('onRequest', ()=>{
 console.log('ejecuata ntes de resolver la peticion ');
 return h.continue;
})



await server.start();
console.log(`the server is alive ${server.info.uri}`);

};

process.on('unhandledRejection',(err)=>{
    console.log(err);
    process.exit(1);
});

init();
