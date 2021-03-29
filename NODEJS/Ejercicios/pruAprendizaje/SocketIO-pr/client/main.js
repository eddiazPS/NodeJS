let socket = io();

socket.on('mesajes',(data)=>{
    console.log(data);
    publicarMensaje(data);
});


function publicarmensaje (){
    let html = data.map((mensaje,index)=>{
        return(`<dir class='mensaje'>
               <strong> ${mensaje.alias} </strong> dice: 
               <p>${mensaje.texto}</p>
               </dir>`);
    }).join(' ');
    document.getElementById('mensajes').innerHTML = html;
}


function agregarMensaje(e){
    let mensaje = {
        alias : document.getElementById('alias').value ,
        texto : document.getElementById ('texto').value
    };
    document.getElementById('alias').style.display='none';
    socket.emit('agregar-mensaje',mensaje);
}

