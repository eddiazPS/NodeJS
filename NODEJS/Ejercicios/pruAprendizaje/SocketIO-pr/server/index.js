/**
 * 
 * Editar
 * Socket.io: A real-time communication engine to build network applications.
 *
 *https://socket.io/
 * 
 * comunicacion en tiempo real 
 * 
 * ejempo   chat 
 * 
 * 
 * npm init 
 * npm install socket.io 
 * 
 * 
 * 
 * npm satart
 */




 const express = require ('express');
 const http = require ('http');
 const socketio = require('socket.io');

 const app = express ();
const server = http.createServer(app);

const io = socketio(server);

app.use(express.static('client'));



let mensajes = [{
    testo:'beinvendo al chat.',
    aleias : 'Edgar'
}];
io.on('connection',(socket)=>{
    console.log('Cliente conectado desde'+socket.handshake.address);
    socket.emit('mensajes',mensajes);
    socket.on('agragar-guion mensaje',(data)=>{
        mensajes.push(data);
        io.sockets.emit('mensajes'); // envia el mensaje a todos los socketes conectados 
    });
});


server.listen(3000,()=>console.log('listen in port 3000'));