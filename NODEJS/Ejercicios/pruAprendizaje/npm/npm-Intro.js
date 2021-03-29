/**
 * 
 * manejador de paquetes po defecto 
 * 
 * repositorio mas grande de paquetes 
 * 
 * comandos principales 
 * 
 * npm init   -  inicializa un package.json  nombre version  kewords author  
 * npm install  - nombre del paquete 
 * npm install express --save    dependecias propias del proyecto   
 * npm install nodemon --save-dev    instalar como una dependencia de desarrollo
 * 
 * Versiones 
 * 
 * ^: Solo hará actualizaciones que no cambien el número distinto de cero del extremo izquierdo. Si se escribe ^0.13.0, cuando se ejecuta npm update, se puede actualizar a 0.13.1, 0.13.2y así sucesivamente, pero no a 0.14.0o por encima.
~: si escribe ~0.13.0cuando se ejecuta, npm updatese puede actualizar a las versiones de parche: 0.13.1está bien, pero 0.14.0no lo está.
>: acepta cualquier versión superior a la especificada
>=: acepta cualquier versión igual o superior a la que especifique
<=: acepta cualquier versión igual o inferior a la que especifique
<: acepta cualquier versión anterior a la que especifique
=: aceptas esa versión exacta
-: acepta una variedad de versiones. Ejemplo:2.1.0 - 2.6.2
||: combinas conjuntos. Ejemplo:< 2.1 || > 2.6
 * 
flags npm
--prod instala solo dependencies excluytendo lo demas
--only=prod => instala solo prod equivaldira a --production
--also=dev  => incluye devdependencies
--no-optional => no instala las dependencias optionales
--no-save no guarda
--dry-run no instala nada solo crea los directoriso


 * 
 * package-log.json que versines se usaron en el proyecto 
 * 
 * 
 * instalarlo global 
 * 
 * npm install -g nombre del paquete      actualizo paquete y proyecto deja de servir se recomienda instalar de manera local 
 * 
 *npm root -g     ruta install global  
 *  
 * 
 * npm install     ->   cuando no encuntra el package.jason y la carpeta node_modules  el instal las dependencias usadas 
 * 
 * npm ci  ->   forma limipa de hacre la instalacion de todos lo paquetes es un restat de todo mas eficiente npm install
 * 
 * npm install-test -> script  package.jason   es el que estamos ejecutando 
 * 
 * npm install-ci-test   ->    instala limpio y despues ejecuta el script de pruebas 
 * 
 * npm  unistall express    ->  eliminar paquete express 
 * 
 * 
 * epress gihub  descargo un tag
 * npm install ./nombreDelArchivo.gz    ->   dependencia instalada desde un archivo 
 * 
 * npm install express@
 * 
 * npm outdated    ->   analizar dependencias instaladas y si ha salido una version mas reciente 
 * 
 * 
 * npm list   -> todos lo paquete que tenemos instalados 
 * 
 * 
 * npn list express  ->  ultimo de express
 * 
 * npm audit
 * 
 * 
 * 
 * npm install numbat-emitter
 * 
 * npm audit 
 * 
 * 
 * 
 * npm run script    _>   script definido en el package 
 * 
 * 
 * 
 * 
 * npx  nos permite usra cosas sin tener la necesidad de instalarla 
 * 
 * 
 * npx cowsay  "probando npx"
 * 
 * 
 * 
 * 
 * npx @vue/cli create vue-app
 * 
 * 
 * 
 * Repo gustavo : https://github.com/gcortesm/nodeJs/tree/master/NODEJS/AutoAprendizaje
 * 
 * 
 * 
 */
