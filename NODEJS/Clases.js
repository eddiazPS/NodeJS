
//##################################################################################################################################################
//##################################################################################################################################################
//##################################################################CLASES##########################################################################
//##################################################################################################################################################
//##################################################################################################################################################
//##################################################################################################################################################

/**
 * 
 * las clces en JS permite   agregar  funciones y propiedades a los objetos 
 * 
 * herencia basada en prototipos
 * en Js una clase es conjunto de objetos que heredan propiedades del mismo onjeto prototipo.
 * el objeto protortipo es la caracteristica central de una clase  
 * 
 * forma antigua de crear clases en Js
 *  
 */

//forma antigua 
// esto es un constructor que inicializa nuevos objetos.
function Range (from,to){
    this.from = from;
    this.to=to;
}

Range.prototype = {
    includes:function (x) {
        return this.from<= x && x<= this.to;    /// funciona para fecha numerico y textuales
    }
,
[Symbol.iterator]:function*(){
    for(let x = Math.ceil(this.from); x<= this.to;x++){ // funcion iteradora que hace iterables los rangos de nuetra clase 
        yield x;
    }
},
toString: function (){
    return "("+this.from+" ... "+this.to+")";
}

};


let range = new Range (1,10);
console.log(range.includes(3));
console.log(range.includes(30));
console.log(range.toString());
console.log([...range]);

 





//FORMA ACTUAL de crear clases en JS ////////////////////////////////////////////////////////////////////////////7

class Range1 {

constructor (from,to){
    this.from = from;
    this.to=to;
}


//
includes ( x) {
    return this.from<= x && x<= this.to;    /// funciona para fecha numerico y textuales
}
 
*[Symbol.iterator] (){
for(let x = Math.ceil(this.from); x<= this.to;x++)  // funcion iteradora que hace iterables los rangos de nuetra clase 
    yield x;
}
 
toString (){
return "("+this.from+" ... "+this.to+")";
}

 
//

}

let range1 = new Range1 (1,10);
console.log(range1.includes(3));
console.log(range1.includes(30));
console.log(range1.toString());
console.log([...range1]);


class Span extends Range1{
    constructor (start,length){
        if(length>=0 ){
            super(start,start+length);
        }else {
            super(starts+length,start);
        }
    }
}

let spam1 = new Span (1,10)
let spam2 = new Span (1,10)
console.log(spam1.includes(5));
console.log(spam2.toString())



// Funcion como exprecion 

let square = function(x){
    return x*x;

}
console.log(square(6));


//clase como exprecion 

let Square = class {
    constructor(x){
       this.area = x*x ;     
    }
}

console.log(new Square().area);

let squareObject = new Square(7);
console.log(squareObject.area);


////////////////////////////////////////////////////EJEMPLO//////////////////////////////////////////////////////////////////

//FORMA ACTUAL  

class Cuadrado {
    constructor (lado){
        this.lado = lado;  
    }
    ladoPar () {
        return this.lado%2 == 0 ;    /// funciona para fecha numerico y textuales
    }
    toString (){
        return "( es un cuadrado de lado "+this.lado+")";
    }
}
    
    let cuadrado1 = new Cuadrado (4);
    console.log(cuadrado1.ladoPar());
    console.log(cuadrado1.toString());

// FORMA ANTUGUA 

function CuadradoAntiguo (lado){
    this.lado = lado;
}

CuadradoAntiguo.prototype = {
    ladoPar:function (x) {
        return this.lado%2 == 0 ; 
    }
,
 
toString: function (){
    return "( es un cuadrado Antiguo de lado "+this.lado+")";
}

};

let cuadrado2 = new CuadradoAntiguo (10);
console.log(cuadrado2.ladoPar());
console.log(cuadrado2.toString());

class PentagonoRegular extends Cuadrado{
    constructor (lado){
        if( lado%2 == 0 ){
            super(lado+1);
        }else {
            super(lado+8);
        }
    } 
    toString (){
        return "( es un  Pentagono de lado "+this.lado+")";
    }
}

let pentagonoRegular1 = new PentagonoRegular (1)
console.log(pentagonoRegular1.ladoPar(5));
console.log(pentagonoRegular1.toString())

// Funcion como expresiones 

let par = function(x){
    return x%2 == 0;
}
console.log(par(7));


//clase como expresiones 

let Par9 = class {
    constructor(x){
       this.ml = x%9 == 0 ;     
    }
}

console.log(new Par9(18).ml);
let par9 = new Par9(5);
console.log(par9.ml);








