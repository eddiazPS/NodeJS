const fs = require ('fs');

let stream = fs.createReadStream('./OrigCopy2.txt','UTF-8');

let data = '';

stream.once('data',()=>{
    console.log('iniciando \n');

});


stream.on('data',chunk=>{
    console.log(`${chunk.length} | `);
    data += chunk;
});

stream.on('end',()=>{
    console.log('fin \n');
    console.log(data.length);


});

