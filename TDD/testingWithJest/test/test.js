/* const upperCase = require ('../uppercase');



describe('Uppercase',()=>{

    beforeAll(()=>console.log('Soy el beforeAll'));
    beforeEach(()=>console.log('Soy el beforeEach'));

      //only test.only
   test('Obtener Uppercase de hello',()=>{
       expect(upperCase('hello')).toBe("HELLO");
   }); 


// test('it is not snowing', () => {
//     expect(inchesOfSnow()).toBe(0);
//   });

afterAll(()=>console.log('Soy el afterAll'));
afterEach(()=>console.log('Soy el afterEach'));

});

describe('Obtener la misma prueba datos diferentes ',()=>{

    test.each([
        [2, 2, 2],
        [1, 2, 3],
        [2, 1, 3],
      ])('.add(%i, %i , %i) =6', (a, b,c) => {
        expect(a + b+c).toBe(6);
      });

      test.todo('Otener ...  ');  

});

 

const myBeverage = {
    delicious: true,
    sour: false,
  };
  
  describe('Obtener el resultado deseado  my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });


//EXPECT
//expect.objectContaining(object)
//expect.stringContaining(string)
//expect.stringMatching(string | regexp)


describe('stringMatching in arrayContaining', () => {
  const expected = [
    expect.stringMatching(/^Alic/),
    expect.stringMatching(/^[BR]ob/),
  ];
  it('matches even if received contains additional elements', () => {
    expect(['Alicia', 'Roberto', 'Evelina']).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Roberto', 'Evelina']).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});

*/
// npm test
// node ./node_modules/jest/bin/jest.js --coverage


//Ejercicio - lunes 
//https://jestjs.io/es-ES/docs/api   implemetacion de uno que nos llame la atencion   


//seleccionar una para el tdd 


describe('IMEI Espesificacion 5.1 Errores iniciales de validacion, tamaño espacios o caracteres', () => {
  
  const IMEI ='123434456729016';

  const expected1 = [
    expect.stringMatching(/\W/),   
  ];
  it('IMEI sin caracteres especiales, sin espacios ', () => {
    expect([IMEI]).not.toEqual(
      expect.arrayContaining(expected1),
    );
  });

  it('Longitud IMEI = 15 ', () => {
    console.log(IMEI.length==15);
    expect(IMEI.length==15).toBeTruthy();
  });

  const expected  = [
    expect.stringMatching(/\D/),   
  ];
  it('IMEI sin letras ', () => {
    expect([IMEI]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
 
   


});

