//Criba de Eratóstenes
//Primer paso: listar los números naturales comprendidos entre 2 hasta el número que se desee, en este caso, hasta el 20.


//2. Segundo paso: Se toma el primer número no rayado ni marcado, como número primo.


//3. Tercer paso: Se tachan todos los múltiplos del número que se acaba de indicar como primo


//4. Cuarto paso: Si el cuadrado del primer número que no ha sido rayado ni marcado es inferior a 20, entonces se repite el segundo paso. Si no, el algoritmo termina, y todos los enteros no tachados son declarados primos.


//Como 3² = 9 < 20, se vuelve al segundo paso:

/* En el cuarto paso, el primer número que no ha sido tachado ni marcado es 5. Como su cuadrado es mayor que 20, el algoritmo termina y se consideran primos todos los números que no han sido tachados.

Como resultado se obtienen los números primos comprendidos entre 2 y 20, y estos son: 2, 3, 5, 7, 11, 13, 17, 19. */



function sieve(DatoIO){
    let Matriza = new Uint8Array(DatoIO+1);
    let max = Math.floor(Math.sqrt(DatoIO));
    let incont = 2;
    while(incont <= max){
     for (let index = 2*incont ; index <= DatoIO ; index +=incont ) {
        Matriza[index] = 1 ;
  
    }
    while (Matriza[++incont])
    ;
    }
   while (Matriza[DatoIO]){
    DatoIO--;
  
   }
  return DatoIO;
  
  }
  
  console.log(sieve(120));


//-----------------------------------------------------Original


function sieve(n){
  let a = new Uint8Array(n+1);
  let max = Math.floor(Math.sqrt(n));
  let p = 2;
  while(p <= max){
   for (let index = 2*p ; index <= n ; index +=p ) {
     a[index] = 1 ;

  }
  while (a[++p])
  ;
  }
 while (a[n]){
 n--;

 }
return n;

}

console.log(sieve(120));

//-------------------------------------------------------