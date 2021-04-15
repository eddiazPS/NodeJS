var Cloudant = require('@cloudant/cloudant');


var cloudant = new Cloudant({ url: 'https://833847aa2-ae74-4006-986e-e0c746f77bbb-bluemix.cloudantnosqldb.appdomain.cloud', plugins: { iamauth:
{ iamApiKey: 'ETDphqkhTiGNYtSutOUGiIfnVYdjn1JlXtoYcebBjusVI' } } });

db = cloudant.db.use('semillero');

console.log("INICIO");

cloudant.db.list((err, body)=>  {
     body.forEach(async function (db) {
         await console.log(db);
    }); 
});


// Cloudant en mayúsculas es el paquete que se carga utilizando require (). 
//cloudant en minúsculas es la conexión autenticada con el servicio IBM Cloudant.


/** CRUD:Estas operaciones básicas muestran las acciones para crear, leer, actualizar y suprimir 
 * sus documentos utilizando el cliente inicializado. */


// Creación de un documento



var createDocument =  (callback) => {
    console.log("Creating document 'mydoc'");
    // especificar el ID del documento para que pueda actualizarlo y suprimirlo posteriormente  
    db.insert({ _id: 'mydoc', a: 1, b: 'two' }, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

//createDocument((err,data)=>console.log(err));

// Lectura de un documento
//let doc=new Object();
const  readDocument =    (callback,Rdoc) => {
    console.log("Reading document 'mydoc'");
    db.get(Rdoc, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        // conservar una copia del documento para que conozca su señal de revisión   
        doc = data;
        callback(err, data);
    });
};
 //readDocument((err,data)=> { console.log(err); doc = data; });


//Actualización de un documento


const updateDocument = (callback,doc) => {
    console.log("Updating document 'mydoc'");
    // realizar un cambio en el documento utilizando la copia que se ha conservado al leerlo de nuevo 
   
    doc.a = 2000;
    db.insert(doc, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        // conservar la revisión de la actualización para que podamos suprimirla 
        doc._rev = data.rev;
        callback(err, data);
    });
};


let doc1 = {
    "_id": "mydoc",
    "_rev": "4-9a906720171eee48ff23e0ccd3f8526f",
    "a": 300,
    "b": "two"
 }


//updateDocument((err,data)=>console.log(err),doc);

// Supresión de un documento

const deleteDocument =  (callback,doc) =>{
    console.log("Deleting document 'mydoc'");
    // proporcionar el ID y revisión que se debe suprimir 
    db.destroy(doc._id, doc._rev, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

//deleteDocument ((err,data)=>console.log(err),doc1);


/** 1. Arreglar el código para que utilice variables de entorno, expresiones lambda, lets, const, etc.2. Buscar la forma de ejecutar estas operaciones como cada uno desee. */


// la funcion CloudantFun  crea el documento mydoc ,   elimina el documento pru_1 , actualiza mydoc

async function CloudantFun (){
    try {
     await createDocument((err,data)=>console.log(err));
    console.log(`Documento creado `);
   
     await readDocument((err,data)=> { console.log(err); 
        deleteDocument ((err,data)=>console.log(err),data);
    },'pru_1');
    console.log('Documento pru_1 leido y eliminado');

     await readDocument((err,data)=> { console.log(err); 
        updateDocument((err,data1)=>console.log(err),data);
    },'mydoc');
    console.log('Documento mydoc leido y actualizado');

    } catch (err) {
        console.log(err);
    }
}
CloudantFun ();





