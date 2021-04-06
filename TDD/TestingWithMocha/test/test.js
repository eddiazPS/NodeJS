const { beforeEach } = require('mocha');
const calculator = require ('../calculator.js');
const blindnum = require ('../blindNum.js');

const assert = require('chai').assert;

// funciones dotro defunciones , it individual test
describe('Operaciones con dos enteros',()=>{
    
    before(()=>{
        console.log('soy el BEFORE');
    });
    
    beforeEach (()=>{
        console.log('soy el BEFOREEACH');
    });

    it('obtener el numero 3',()=>{
        //cuerpo de la prueba
        assert.equal(calculator.add(1,2),3);
        
    });
    it('Obtener el numero 4 de una multiplicacion',()=>{
        assert.equal(calculator.mult(2,2),4);
    });

     after (()=>{
        console.log('soy el AFTER');
    });  

    afterEach (()=>{
        console.log('soy el AFTEREACH');
    });  
});

// ejecucion extraña pero automatica     WINDOW ->   node .\node_modules\mocha\bin\mocha                 LINUX ->   ./node_modules/mocha/bin/mocha  
// exce: PS C:\Users\eddiaz\Documents\GitHub\NodeJS\TDD\TestingWithMocha> node .\node_modules\mocha\bin\mocha

describe ('Numero aleatorio',()=>{
    //this.retries(4);
     let num =0;
     beforeEach(()=>{
     // this.retries(4);
        num=blindnum.numx(2);
        console.log('soy el BEFORE '+num);
    });
      
     it ('numero encontrado', () => {
        //this.retries(4);
      assert.equal(num,1);
     });
 });



//RETRY TESTS

// describe('retries', function() {
//     // Retry all tests in this suite up to 4 times
//     this.retries(4);
  
//     beforeEach(function() {
//       browser.get('http://www.yahoo.com');
//     });
  
//     it('should succeed on the 3rd try', function() {
//       // Specify this test to only retry up to 2 times
//       this.retries(2);
//       expect($('.foo').isDisplayed()).to.eventually.be.true;
//     });
//   });


  

describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        
        assert.equal([1, 2, 3].indexOf(5),-1);
        assert.equal([1, 2, 3].indexOf(5),-1);
        //[1, 2, 3].indexOf(5).should.equal(-1);
        //[1, 2, 3].indexOf(0).should.equal(-1);
      });
    });
  });



//only


  // describe('Array', function() {
  //   describe.only('#indexOf()', function() {
  //     it('should return -1 unless present', function() {
  //       // this test will be run
  //     });
  
  //     it('should return the index when present', function() {
  //       // this test will also be run
  //     });
  //   });
  
  //   describe.only('#concat()', function() {
  //     it('should return a new Array', function() {
  //       // this test will also be run
  //     });
  //   });
  
  //   describe('#slice()', function() {
  //     it('should return a new Array', function() {
  //       // this test will not be run
  //     });
  //   });
  // });


//GENERACIÓN DE PRUEBAS DINÁMICAMENTE

  describe('add()', function() {
    function add(args) {
      return args.reduce((prev, curr) => prev + curr, 0);
    }
    const testAdd = ({args, expected}) =>
      function() {
        const res = add(args);
        assert.equal(res, expected);
      };
  
    it('correctly adds 2 args', testAdd({args: [1, 2], expected: 3}));
    it('correctly adds 3 args', testAdd({args: [1, 2, 3], expected: 6}));
    it('correctly adds 4 args', testAdd({args: [1, 2, 3, 4], expected: 10}));
  });





// DURACIÓN DEL EXÁMEN
describe('Retries', function() {
 this.slow(300000); // five minutes
 this.timeout(5);
  this.retries(4);

  let num =0;
  beforeEach(()=>{
     num=blindnum.numx(8);
     console.log('soy el numero aleatorio '+num);
 });


  it('should succeed on the 3rd try', function() {
   this.retries(2);
    assert.equal(num,1);
  });
});


