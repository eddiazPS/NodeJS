const fs = require('fs');

fs.readFile('./archivo.txt', 'utf-8', (error, datos) => {
    if (error) {
        throw error;
    } else {
        console.log(datos)
        let array1 = new Uint8Array([...datos]);
        console.log(array1);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let sumTipo = array1.reduce(reducer);
        console.log(`Sumatoria de enteros ${sumTipo}`);
    }
});


