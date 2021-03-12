/**
 * 
 * Se da una palabra "Hola" y se debe sacar las vocales
 * utilizando match
 * 
 */


let palabra  = /[aeiou]/g;
let text = "Holaaaaaaaee";
let match = text.match(palabra);
let vocales , inicio;

if (match != null ){
    inicio =match [0];
    vocales = match [1];
  }

  console.log(`match: ${match}` );
  console.log(`inicio: ${inicio}` );
  console.log(`vocales: ${vocales}` );

