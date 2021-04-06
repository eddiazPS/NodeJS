module.exports.numero1 = function ( ) { return Math.trunc(Math.random() * (1 - 0) + 0);};
module.exports.numero2 = function ( ) { let m = blindNum.numero1(); return Math.trunc(Math.random() * (90 - 10) + 10);};
module.exports.initNum = function ( ) { return Math.trunc(Math.random() * (9999 - 1) + 1)+blindNum.numero2();};
module.exports.initNum2 = function (ps) { return ps.replace(/\w*/g,".")+blindNum.numero2() ;}; 
module.exports.numx=(x)=> Math.trunc(Math.random() * (x - 0) + 0);