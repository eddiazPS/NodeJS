const {Given,When,Then} = require('cucumber');
const assert = require ('assert').strict;
const {noEstaEnListasBlancas,noTineEspaciosNicaracteres,noEstaEnListasBlancasForEach} = require('../util/validaimei.js');

let validaImei;
let respuesta,respuesta2;

Given('un IMEI {}',obImei =>{
    validaImei = JSON.parse(obImei);
   // console.log(validaImei.imei);
});

When('ingrese el IMEI a la app',   () =>{
     respuesta = noEstaEnListasBlancas(validaImei.imei) ;
     respuesta2 =noEstaEnListasBlancasForEach(validaImei.imei);
  //   console.log(respuesta); 
   //  console.log(" respuestaa2 "+ respuesta2);    
});

Then('obtengo el reporte {}', respEsp =>{
    let respuestaEsperada = new Boolean(respEsp);
  //  console.log('obtengo el reporte de listas blancas '+respuestaEsperada);
    if (respuestaEsperada == true)respuestaEsperada = true; else respuestaEsperada = false;
    assert.equal(respuestaEsperada,respuesta);
     
});



Given('dado un IMEI {}',obImei =>{
    validaImei = JSON.parse(obImei);
  //  console.log(validaImei.imei);
});

When('cuando lo ingreso a la app', () =>{
     respuesta = noTineEspaciosNicaracteres(validaImei.imei) ;
  //   console.log(respuesta);     
});

Then('obtengo respuesta de validacion {}', respEsp =>{
    let respuestaEsperada = new Boolean(respEsp);
  //  console.log('obtengo el reporte de validacion '+respuestaEsperada);
    if (respuestaEsperada == true)respuestaEsperada = true; else respuestaEsperada = false;
    assert.equal(respuestaEsperada,respuesta);
     
});




