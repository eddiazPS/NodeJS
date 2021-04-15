var Cloudant = require('@cloudant/cloudant');
const { resolve } = require('path');
const databaseName = 'movies-demo';
 
let getConnection = () => {
    return new Promise((resolve, reject) => {
        Cloudant({
            url: 'https://833847aa2-ae74-4006-986e-e0c746f77bbb-bluemix.cloudantnosqldb.appdomain.cloud', plugins: {
                iamauth:
                    { iamApiKey: 'ETDphqkhTiGNYtSutOUGiIfnVYdjn1JlXtoYcebBjusVI' }
            }
        }, (error, connection) => {
            if (connection) {
                resolve(connection);
            } else {
                reject(error);
            }
        });

    });
};

// agregar el campo all movies   ->  definido en la nube-> get-old-movies -> if(doc.Movie_year < 2000){
let fetchDataFromDB = connection => {
    return new Promise((resolve, reject) => {
        let objectArray = [];
        let dbName = connection.db.use(databaseName);
        dbName.view('data', 'get-old-movies', { "include_docs": true }, (err, result) => {
            if (result) {
                result.rows.forEach(document => {
                    let dbDoc = document.doc;
                    dbDoc.all_movies = true;
                    objectArray.push(dbDoc);
                });
                resolve(objectArray);
            } else {
                reject(error);
            }
        });
    });
};

let updateData = (documentObject, connection) => {
    return new Promise((resolve, reject) => {
        let dbName = connection.db.use(databaseName);
        dbName.insert(documentObject, (err, document) => {
            if (err) {
                reject(err);
            } else {
                resolve('200')
            }
        });
    });
};

let updateBulkData = (documentObject, connection) => {
    return new Promise((resolve, reject) => {
        let dbName = connection.db.use(databaseName);
        dbName.bulk(documentObject, (err, document) => {
            if (err) {
                reject(err);
            } else {
                resolve('200')
            }
        });
    });
};




    async function main() {
        let connection;
        let dataArray;
        let i = 0;
        const size=500;
        try {
            connection = await getConnection();
            dataArray = await fetchDataFromDB(connection);
        } catch (err) {
            console.log(err);
        }
       // for (i in dataArray) {   
        while (dataArray[i]){
            console.log('Iteracion');
            try {                             //dataArray[i], connection); 
                let status = await updateBulkData({docs:dataArray.splice(0,size)}, connection); // bulk (rapido)  |  updateData (demorada)
                if (status != '200') {
                    console.log(`ERROR : ${status}`);
                    break;
                }
            } catch (err) {
                console.log(err)
            }
        }
        console.log('Finalizado');
    }
main();








