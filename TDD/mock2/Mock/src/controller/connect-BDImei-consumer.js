// sound-player-consumer.js
import ConnectBDImei from './connect-BDImei.js';

export default class connectBDImeiconsumer {
  constructor() {
    this.connectBDImei = new ConnectBDImei();
  }

  LoadingTablesBDImei() {
    const Consulta   = 'Consultando...BD';
    this.connectBDImei.consultaListasBlancas(Consulta); 
  }
}