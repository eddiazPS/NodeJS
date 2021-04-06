import { getUsers, getUsersById } from '../user.js';

import SoundPlayer from '../sound-player';
import SoundPlayerConsumer from '../sound-player-consumer';
jest.mock('../sound-player'); // SoundPlayer is now a mock constructor

import ConnectBDImei from '../connect-BDImei.js';
import ConnectBDImeiconsumer from '../connect-BDImei-consumer.js';
jest.mock('../connect-BDImei.js');




describe('Test Connection IMEI listas blancas', () => {

    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        ConnectBDImei.mockClear();
      }); 
    
      it('Chequear si el consumidor de la conexion llama al constructor  ', () => {
        const connectBDImeiconsumer = new ConnectBDImeiconsumer();
        expect(ConnectBDImei).toHaveBeenCalledTimes(1);
      });

      it('Chequear si el consumidor llama al metodo de la clase desde la instancia ', () => {
        // Show that mockClear() is working:
        expect(ConnectBDImei).not.toHaveBeenCalled();
      
        const connectBDImeiconsumer = new ConnectBDImeiconsumer();
        // Constructor should have been called again:
        expect(ConnectBDImei).toHaveBeenCalledTimes(1);
      
        const connOk = 'Consultando...BD';
        connectBDImeiconsumer.LoadingTablesBDImei();
        
      
        // mock.instances is available with automatic mocks:
        const mockConnectBDImeiInstance = ConnectBDImei.mock.instances[0];
        const mockLoadingTablesBDImei = mockConnectBDImeiInstance.consultaListasBlancas;
        expect(mockLoadingTablesBDImei.mock.calls[0][0]).toEqual(connOk);
        // Equivalent to above check:
        expect(mockLoadingTablesBDImei).toHaveBeenCalledWith(connOk);
        expect(mockLoadingTablesBDImei).toHaveBeenCalledTimes(1);
      });



});






describe('Test Class ', () => {

    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        SoundPlayer.mockClear();
      }); 
    
      it('We can check if the consumer called the class constructor', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer();
        expect(SoundPlayer).toHaveBeenCalledTimes(1);
      });

      it('We can check if the consumer called a method on the class instance', () => {
        // Show that mockClear() is working:
        expect(SoundPlayer).not.toHaveBeenCalled();
      
        const soundPlayerConsumer = new SoundPlayerConsumer();
        // Constructor should have been called again:
        expect(SoundPlayer).toHaveBeenCalledTimes(1);
      
        const coolSoundFileName = 'song.mp3';
        soundPlayerConsumer.playSomethingCool();
      
        // mock.instances is available with automatic mocks:
        const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
        const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
        expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
        // Equivalent to above check:
        expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
        expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
      });



});

const url = 'https://www.edward.com/users/';

describe('Test Users', () => {

    function forEach(items, callaback) {
        for (let i = 0; i < items.length; i++) {
            callaback(items[i]);
        }
    }


    it('Obtener lista usuarios', async () => {
        const users = await getUsers(url);
        expect(users.length).toBeGreaterThan(0);
    });

    it('Obtener lista de usuarios con promesa', done => {
        getUsers(url).then(result => {
            expect(result.length).toBeGreaterThan(0);
            
        });
        done();
    });

    it('Obtener un usuario', () => {
        return getUsersById(1,url).then(result => {
            expect(result.id).toBe(1);
        });
    });

    it('Obtener un error cuando el usuario no se encuentra', async () => {
        try {
            expect.assertions(1,url);
            const result = await getUsersById(url);
        } catch(error) {
            expect(error.message).toMatch('code 404');
        }
    });



     it('Mock funcion forEach',()=>{
         const mockCallBack = jest.fn(x=>x*2); 
          forEach([2,3],mockCallBack);
          // lafuncion mock es llamdad dos veces
          expect(mockCallBack.mock.calls.length).toBe(2);
          // que resultado nos da al multiplicar el primer elemento del arreglo * 2
          expect(mockCallBack.mock.calls[0][0]).toBe(2);
          // que resultado nos da al multiplicar el segudo elemento del arreglo * 2
          expect(mockCallBack.mock.calls[1][0]).toBe(3);
          // imprime el objeto completo 
          console.log("calls:"+mockCallBack.mock.calls);
            

          expect(mockCallBack.mock.results[0].value).toBe(4);
          expect(mockCallBack.mock.results[1].value).toBe(6);

          expect (mockCallBack.mock.results ) ;

          console.log("result[1] : "+mockCallBack.mock.results[1].value);

     });

     it('mock valores de retorno',()=>{
         const mockCallBack = jest.fn();
         //console.log(mockCallBack);

         mockCallBack.mockReturnValueOnce(2) //primera llamda
            .mockReturnValueOnce('y') // segunda llamada
            .mockReturnValue(false); // demas llamadas 
         console.log(mockCallBack(),mockCallBack(),mockCallBack(),mockCallBack());

        const filterTest = jest.fn();
        filterTest.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const result =[2,3].filter(i=>filterTest(i));

        console.log(result);// un filtro del arreglo [2,3]    como el primer valor es true del mockreturnvalueonce nos devuelve el primer elemento
        console.log (filterTest.mock.calls);//llamadas de la funcion 
     });


}); 


jest.useFakeTimers();   //  Aquí habilitamos temporizadores falsos llamando Esto simula setTimeout y otras funciones de temporizador

describe('timerGame', () => {  // timerGame
    beforeEach(() => {
      jest.spyOn(global, 'setTimeout');   // ates de cada test se declara un 'setTimeout' 
    });
    it('esperar un segundo antes de terminar el juego ', () => {
      const timerGame = require('../timerGame');
      timerGame();
  
      expect(setTimeout).toBeCalledTimes(1);
      expect(setTimeout).toBeCalledWith(expect.any(Function), 3000);
    });
  
    it('llamara el callback despues de 1sg via runAllTimers', () => {
      const timerGame = require('../timerGame');
      const callback = jest.fn();
  
      timerGame(callback);
  
      // En este punto el callback no ha sido llamdao aun 
      expect(callback).not.toBeCalled();
  
      // corremos todos lo timmers
      jest.runAllTimers();   //jest.advanceTimersByTime(1000);
  
      // ahora el llamado del calback puede ser testado!
      expect(callback).toBeCalled();
      expect(callback).toBeCalledTimes(1);
    });
  
     






  });
  