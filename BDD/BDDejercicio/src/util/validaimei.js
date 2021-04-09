const data = [
    {"imei":"123456789012345"},
    {"imei":"123456789012344"},
    {"imei":"123456789012343"},
    {"imei":"123456789012349"}
];


const getListaBlanca = ()=>{
  return data;
}

const noEstaEnListasBlancas =   imei=>{
    for ( let i of data  ) {
        //   console.log('dentro del for '+i.imei);
          if (i.imei == (imei)){
             return false ;
            }
          else return true;
           }
};


    const noEstaEnListasBlancasForEach =   InPutImei=>{
        let re=[];
        data.forEach(function (i){
       //     console.log(" for each "+i.imei);
            re[i] = InPutImei===i.imei;
        });
         if ( re.includes( true ))return false;else return true;
    };


const noTineEspaciosNicaracteres = imei=>{    
     if(/\W/.test(imei))return false; else return true;
};

module.exports = {
    getListaBlanca,
    noEstaEnListasBlancas,
    noTineEspaciosNicaracteres,
    noEstaEnListasBlancasForEach
};