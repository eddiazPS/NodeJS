/**
 * 
 * Animacion :  LOS PASOS DEL HOMBRE INVISIBLE - NO LO HAN PODIDO PARAR
 * por: @Ehdm
 *  
 */

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
setTimeout(()=>{console.clear();console.log("\n\n\n                                             ####  FIN  ####")} ,9000  );
let clock1 = setInterval(()=> {
    console.log("!üü! --------------------------------------------------------------------------------->");    
  },3000);  
setTimeout (()=>{clearInterval(clock1);},6000);
let clock = setInterval(()=> {
    console.log("                         <------------------------------------------------------------------------------------------------!OO!");    
  },2500);  
setTimeout (()=>{clearInterval(clock);},5000);
    console.log("             Å Å Å Å Å Å Å LOS PASOS DEL HOMBRE INVISIBLE - NO LO HAN PODIDO PARAR Å Å Å Å Å Å  ");   // Tiempo = 0,01
    sleep(700);
    [1,2,3].forEach(function (i){
    console.log("           W#################################################################################W "+[i]);
});
[1,2,3,4,5,6,7,8,9].forEach(function (i){
    console.log("           w###################                                           ###################w "+[i]);
});
    console.log("           w###################                 V                         ###################w ");
setTimeout(function cb(){
    console.log("                                           .  ");console.log("                                                  .  ");
    
},1000);
setTimeout(function cb(){
    console.log("                                         o  ");
        },2000);
        setTimeout(function cb(){          
console.log("                                                   o  ");
        },2200);
        setTimeout(function cb(){
            console.log("                                        o  ");
        },2500);
        setTimeout(function cb(){
console.log("                                                    O  ");
        },3000);
        setTimeout(function cb(){
               console.log("                                      O  ");
        },3500);
        setTimeout(function cb(){
console.log("                                                      O  ");
        },4000);
        setTimeout(function cb(){
                    console.log("                                   O  ");
        },4500);
        setTimeout(function cb(){
console.log("                                                         O  ");
        },5000);
        setTimeout(function cb(){
                       console.log("                                 O  ");
        },5500);

