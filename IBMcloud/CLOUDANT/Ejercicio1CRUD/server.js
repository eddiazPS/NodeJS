var Cloudant = require('@cloudant/cloudant');

console.log('Ejercicio 1');
cloudant();
async function cloudant() {
    try {
        console.log('creando conexion ..');
        const cloudant = Cloudant({
            url: "https://833847aa2-ae74-4006-986e-e0c746f77bbb-bluemix.cloudantnosqldb.appdomain.cloud",
            plugins: {
                iamauth: {
                    iamApiKey: "ETDphqkhTiGNYtSutOUGiIfnVYdjn1JlXtoYcebBjusVI"
                }
            }

        });
        console.log('Conexion creada ..');
        console.log('- Bases de datos creadas - ');
        let allDBS = await cloudant.db.list();
        console.log(`Cloudant db's ${allDBS}`);

    } catch (err) {
        console.log(err);
    }
}


createDocument((err,data)=>{
    try {
        console.log(data);   
    } catch (err) {
        console.log(err);
    }
});



/*


var cloudant = new Cloudant({ url: 'https://examples.cloudant.com', plugins: { iamauth: { iamApiKey: {
    "apikey": "TDphqkhTiGNYtSutOUGiIfnVYdjn1JlXtoYcebBjusVI",
    "host": "33847aa2-ae74-4006-986e-e0c746f77bbb-bluemix.cloudantnosqldb.appdomain.cloud",
    "iam_apikey_description": "Auto-generated for key 9ae2480a-2a20-4d38-a36c-0361a90a3117",
    "iam_apikey_name": "Credenciales-semillero",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/93429b4ec4da4de69de47b452aa060d5::serviceid:ServiceId-fcc00449-5d46-42ee-8602-3d4722579ee6",
    "url": "https://33847aa2-ae74-4006-986e-e0c746f77bbb-bluemix.cloudantnosqldb.appdomain.cloud",
    "username": "33847aa2-ae74-4006-986e-e0c746f77bbb-bluemix"
  } } } });


console.log("INICIO");

cloudant.db.list(function (err, body) {
     body.forEach(function (db) {
          console.log(db);
    }); 
});



// Cloudant en mayúsculas es el paquete que se carga utilizando require (). 
//cloudant en minúsculas es la conexión autenticada con el servicio IBM Cloudant.


// CRUD:Estas operaciones básicas muestran las acciones para crear, leer, actualizar y suprimir 
 // sus documentos utilizando el cliente inicializado. 


// Creación de un documento



*/
console.log("Creación de un documento");

var createDocument = function (callback) {
    console.log("Creating document 'mydoc'");
    // especificar el ID del documento para que pueda actualizarlo y suprimirlo posteriormente  
    db.insert({ _id: 'mydoc', a: 1, b: 'two' }, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

/*

// Lectura de un documento

var readDocument = function (callback) {
    console.log("Reading document 'mydoc'");
    db.get('mydoc', function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        // conservar una copia del documento para que conozca su señal de revisión   
        doc = data;
        callback(err, data);
    });
};




//Actualización de un documento


var updateDocument = function (callback) {
    console.log("Updating document 'mydoc'");
    // realizar un cambio en el documento utilizando la copia que se ha conservado al leerlo de nuevo 
    doc.c = true;
    db.insert(doc, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        // conservar la revisión de la actualización para que podamos suprimirla 
        doc._rev = data.rev;
        callback(err, data);
    });
};


// Supresión de un documento

var deleteDocument = function (callback) {
    console.log("Deleting document 'mydoc'");
    // proporcionar el ID y revisión que se debe suprimir 
    db.destroy(doc._id, doc._rev, function (err, data) {
        console.log('Error:', err);
        console.log('Data:', data);
        callback(err, data);
    });
};

*/


/** 1. Arreglar el código para que utilice variables de entorno, expresiones lambda, lets, const, etc.2. Buscar la forma de ejecutar estas operaciones como cada uno desee. */