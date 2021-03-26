



const express = require('express');
const port = 9300;

const myServer = express();

myServer.listen(port,()=>{
    console.log(`My server listening on port ${port}`);
})