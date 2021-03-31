/**
 * 
 * TDD
 * 
 * Test Driven Developent
 * 
 * porque TDD
 * 
 * se dejan la pruebas a lo ultimo, momento inutil , pruebas antes de publicar el proyecto , demaciado tarde  
 * 
 * pruebas de afan, cuanto afan tenias, siempre hay algo mas urgente que dedicarle tiempo a testiar 
 * 
 * vivir esta situacion :
 * 
 * peleas riñas incendios 
 * 
 * mientras funcione no lo toque 
 * 
 * proyectos que dura meces dura años 
 * 
 * no es lo que el cliente esperaba , desarrollar de ceros para stisfacer al cliente 
 * 
 * nunca la documentacion esta actualizada , sempre se pone para despues 
 * 
 * la pruebas de regrecion tradan demaciado y no pueden pasar a poroduccion 
 * 
 * ESTO NO SE RESUELVE MAGICAMENTE CON TDD  hay que saberlo emplementar y entenderlo, no encamina a la solucion de estos problemas 
 * 
 * TDD es un procedimiento muy simple que nos lleva a escribir pruebas antes de lo que es la implementacion real
 * 
 * primero son las pruebas 
 * 
 * cual es este procedimiento , este procedimeinto tienen una particularidad no es temporal es ciclico es como un set interval va a pasar multiples veces 
 * es un Procedimiento bastante corto 
 * 
 * 
 * red-green-refactor
 * 
 * CREAR USUARIO
 * 
 * escribimos una prueba pensando de lo que podian
 * 
 * 
 * ejecutar todas la pruebas 
 * 
 * 
 * escribe el codigo de implementacion 
 * 
 * 
 * ejecuto todas la pruebas   todas buenas 
 * 
 * 
 * refactor -> ir a la implementacion y arreglarlo 
 * 
 * 
 * ejecuto todas la pruebas 
 * 
 * 
 * rojo - fallar 
 * verde - ok 
 * refactoriza
 *  
 * 
 * 30 - 03 -2021 Refacto rojo verde 
 * 
 * cuado estamos escribiendo las pruebas estamos en rojo  
 * 
 * 
 * ponerse un tiempo de forma personal o a nivel de equipo para las reparaciones 
 * 
 * hemos hecho la implemetacion que tiene algo mal , vuelve al punto de partida 
 * 
 * cobertura de la pruebas existentes  (excluyendo la ultima prueba ) debe ser sagrada
 * 
 * no ir toquetiando el codigo, por culpa de una ultima prueba , cambiamos el codigo existente mediante una refactorizacion , no es una foma de corregir 
 * 
 * nos da mas confianza salir a produccion  ya que todo esta en verde en nuestra rede deseguridad 
 * 
 * poder refacorizar con confianza pensada a mejorar el codigo NO A INTRODUCIR NUEVAS FUNCIONALIDADES 
 * 
 * poder descanzar que la refactorizacion esta respaldad por nuestra red de pruebas 
 *
 * tdd reducir costos de mantenimiento futuro  estamos probando y corrigiendo y mantenimiento al mismo tiempo
 * 
 * 
 * una vez finalizada la refactorizacion se repite el proceso 
 * 
 * es un bucel sin fin de un proceso muy corto *
 * 
 * 
 * 
 * 
 * 
 * 
 * pruebas e implementacion se tiene que hacer rapido 
 * 
 * codigo estructura a requisitos no ideas 
 * 
 * pruebas mas que codigo tienen que ser certificadores que se cumple la espesificacion 
 *    
 * 
 * idea: descripcion 
 * 
 * 
 * 
 * PRUEBAS  
 * 
 * CAJA NEGRA  -  usan la interfaces y se aseguran que funcione como se espera No ven las entrañas , dar una perspectiva externa al programa que estan evaluenado,
 *  eficiente para grandes segmentos de codigo - el de pruebas no sabe desarrollar no entiende de codigo   
 * 
 * 
 * CAJA BLANCA  - prubas de caja transpartente caja de vidrio o estructurales 
 * analiza la estructura de software, se evaluan escenarios , pruebas eficientes para encontrar errores , evaluan el codigo, permiten econtrar errores ocultos , (pruebas detalladas)
 * optimizacion del codigo , se requiere un conocimiento profundo de programacion 
 * 
 * 
 * negra VS blanca     = diferencia gigante el conocimiento    
 * 
 * tdd pruebas de caja blanca antes de la implementacion del codigo 
 * 
 * 
 * 
 * CONTROL DE CALIDAD Y GARANTIA DE CALIDAD 
 * 
 * con el c c  se centran en el producto echo en econtrar defectos , GC preveienen estos defectos la idea es no encontrarlos 
 * el orden en el que se escriben las pruebas es importante, espesificaciones e ihistoria de usuario ,  pruebas , codigo
 * las pruebas definen el codigo 
 * 
 * 
 * SINDROME POLICIAL 
 * 
 * fallo el equipo de desarollo 
 * 
 * 
 * EL ORDEN IMPORTA  
 * 
 * pruebas 
 * 
 * codigo >
 *  
 * 
 * 
 * 
 * 
 * 
 * La prueba es certificadora de la implementacion
 * 
 * 
 * 
 * MOCKING  31/03/21-------------------------------------------------- 
 * 
 * 
 * 
 * pequeñas partes remplazables , o depender de las dependencias ,  si dependemos de algo que no sea de stopper
 * eliminar factoes externos, uno de los beneficios claes es que  no va servirde estoper , y vamos a tener flexibilidad para haer pruebas 
 * 
 * documentacion ejecutable 
 * el codigo debe escribirse de tal forma que puedan reemplazar facilmente una dependencia por otra 
 * mirando pruebas se puede entender el codigo  mas que viendo la propia documentacion 
 * 
 * documentacion ejecutable  
 * 
 * sin depuracion 
 * codigo sin pruebas (codigo ocurre un error -> depurar)
 * con tdd rara vez se depura el codigo 
 * cobertura de codigo encontrar el error es mucho mas facil 
 * 
 * Herramientas marcos y entornos 
 * Nos convertimos en lo que contemplamos. Damos forma a nuestras herramientas y luego nuestras herramientas nos dan forma a osotros 
 * 
 * 
 * Seudo pruebas 
 * espesificaciones 
 * 
 * 
 *  
 */