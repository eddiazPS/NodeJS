const test = require ('tape');
const calculator  = require ('../calculator.js');

/*
test('prueba de suma de dos enteros', t=>{
    t.plan(1);  // cuantos validador de prueba  1  
    t.equal(calculator.add(1,2),3);
    
});

test('obtener suma de dos strings', t=>{
    t.plan(1);  // cuantos validador de prueba  1     //    devuelve true or falce si  son iguales los parametros 1 y2
    t.equal(calculator.add("1","2"),3);
    
});

test('Metodo ok', t=>{
    t.plan(1); 
    t.ok("","Estado OK");  //  que tenga datos    usar entre false y true 
});


test('Metodo No ok', t=>{
    t.plan(1); 
    t.notOk("","Estado no OK");  // lo contarrio 
});



test('Metodo error', t=>{
    t.plan(1); 
    t.error("error","Estado error");  //     
});



test('Metodo notEqual', t=>{
    t.plan(1); 
    t.notEqual(true,"Estado not ,Equal");  //    devuelve true or falce si no son iguales los parametros 1 y2
});

test('Metodo notEqual', t=>{
    t.plan(1); 
    t.equal(true,"Estado not ,Equal");   //    devuelve true or falce si  son iguales los parametros 1 y2
});



test('Metodo looseEqual', t=>{
    t.plan(1); 
    t.looseEqual("2",3,"Estado looseEqual");   //    test, lo que esperamos , mensaje  ->  no compara tipos 
});


test('Metodo deepEqual', t=>{
    t.plan(1); 
    t.deepEqual("2","2","Estado deepEqual");   //     compara valor y tipo  
});

*/


// pruebas con las otras operaciones  para /   y   *



test('Prueba de Division de dos enteros', t=>{
    t.plan(1);   
    t.equal(calculator.div(10,2),5);
    
});


test('Prueba de Division de dos enteros Metodo ok', t=>{
    t.plan(1); 
    t.ok(((calculator.div(10,2)===5)===true),"Estado OK");  //  que tenga datos    usar entre false y true 
});




test('Prueba de Multiplicacion de dos enteros', t=>{
    t.plan(1);   
    t.equal(calculator.mult(1,2),2);
    
});



test('Prueba de Multiplicacion de dos enteros Metodo looseEqual', t=>{
    t.plan(1); 
    t.looseEqual(calculator.mult(1,3) ,"3","Estado looseEqual");   //    test, lo que esperamos , mensaje  ->  no compara tipos 
});

// onFinish
test.onFinish(() => console.log(`\n# CouchDB version: 1.3`));


test.onFinish(function(){
    setTimeout(function(){
      process.exit();
    }, 3000);
  
  })


// skip

test.skip('Prueba Skip', t=>{
    t.plan(1);   
    t.equal(calculator.mult(1,2),2);
    
}, "Prueba Skip");


test.skip('skipped', function (t) {
    t.ok(false)
   })



   // fail 

   test('suite', function (t) {
    // t.ok(true, 'yeah')
    // t.ok(false, 'WOOPS')
    //t.fail(false);
    t.fail('should not be called');
    t.end();
   })


   // exe:  C:\Users\eddiaz\Documents\GitHub\NodeJS\TDD\TestingWithTape> node .\test\test



   








