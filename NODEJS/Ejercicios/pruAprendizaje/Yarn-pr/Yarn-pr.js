/**
 * 
 * Yarn is a package manager that doubles down as a project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we’ve got you covered.
 * 
 Install yarn with this code:
 npm install --global yarn
 
 * --verify-tree
 * 
 * eliminamos de manera manual  yarn generate-lock-entry -> genera 
 * 
 * 
 * eliminamos   modules 
 * 
 * npm install
 * 
 * yarn import  ->   genera 
 * 
 * 
 * yarn install --force    // quse carguen todal lass dependencia del proyecto 
 * 
 * //enlaces virtuales dentro de los espacios de trabajo 
 * yarn link  nos muestra
 * 
 * yarn link pruebasyarn
 *  
 * 
 * yarn unlink pruebabrayan   ->  remueve el link
 * 
 * yarn outdate
 * 
 * 
 * yarn remove express
 * 
 * 
 * yarn   outdate     -> paquetes instalados 
 * 
 * 
 * yarn run dev
 * 
 * yarn exec  echo 'mensaje' 
 * 
 * Sapper:

 Repo gustavo : https://github.com/gcortesm/nodeJs/tree/master/NODEJS/AutoAprendizaje
  * 
  https://github.com/gcortesm/nodeJs/blob/master/NODEJS/AutoAprendizaje/yarn/readme
  
  yarn help

que es yarn ? es un nuevo manejador de paquetes aunque no tiene la misma popularidad de 
npm por que es como el viejo conocido.

yarn se enfoca en la velocidad y en la seguriddad
un punto fuerte que se menciona es el feedback que le proporciona al usuario.

para empezar vamos con el comando 
yarn init


agrega el paquete a dependencies.
yarn add [package]

yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional

--json
Formatee la salida como una secuencia NDJSON
-E,--exact
No use ningún modificador semver en el rango resuelto
-T,--tilde
Use el ~modificador semver en el rango resuelto
-C,--caret
Use el ^modificador semver en el rango resuelto
-D,--dev
Agregar un paquete como dependencia de desarrollo
-P,--peer
Agregar un paquete como dependencia entre pares
-O,--optional
Agregar / actualizar un paquete a una dependencia opcional regular / de pares
--prefer-dev
Agregar / actualizar un paquete a una dependencia de desarrollo
-i,--interactive
Reutilizar el paquete especificado de otros espacios de trabajo en el proyecto
--cached

yarn global add  --------- Esto es para agregar un paquete de =maenra global

yarn add <alias-package>@npm:<package>
yarn add <package...> --audit

yarn add <package...> --cached


removiendo las dependencias 

yarn remove [package]yarn remove express

Como podemos instalar nuestras dependencias 
yarn o yarn install


yarn install
Instale todas las dependencias enumeradas package.jsonen la node_modulescarpeta local .

El yarn.lockarchivo se utiliza de la siguiente manera:

Si yarn.lockestá presente y es suficiente para satisfacer todas las dependencias enumeradas en package.json, yarn.lockse instalan las versiones exactas registradas en y yarn.lockno se modificarán. Yarn no buscará versiones más nuevas.
Si yarn.lockestá ausente o no es suficiente para satisfacer todas las dependencias enumeradas en package.json(por ejemplo, si agrega manualmente una dependencia a package.json), Yarn busca las versiones más nuevas disponibles que satisfagan las restricciones en package.json. Los resultados se escriben en yarn.lock.
Si desea asegurarse de yarn.lockque no esté actualizado, utilice --frozen-lockfile.

yarn install --check-files
Verifica que los archivos ya instalados en node_modulesno se eliminaron.

yarn install --flat
Instale todas las dependencias, pero solo permita una versión para cada paquete. En la primera ejecución, esto le pedirá que elija una única versión para cada paquete del que se dependa en varios rangos de versiones. Estos se agregarán a su package.jsondebajo de un resolutionscampo.

"resolutions": {
  "package-a": "2.0.0",
  "package-b": "5.0.0",
  "package-c": "1.5.2"
}
yarn install --force
Esto vuelve a recuperar todos los paquetes, incluso los que se instalaron previamente.

yarn install --har
Genera un archivo HTTP de todas las solicitudes de red realizadas durante la instalación. Los archivos HAR se utilizan comúnmente para investigar el rendimiento de la red y se pueden analizar con herramientas como HAR Analyzer o HAR Viewer de Google .

yarn install --ignore-scripts
No ejecute ningún script definido en el proyecto package.json y sus dependencias.

yarn install --modules-folder <path>
Especifica una ubicación alternativa para el node_modulesdirectorio, en lugar de la predeterminada ./node_modules.

yarn install --no-lockfile
No lea ni genere un yarn.lockarchivo de bloqueo.

yarn install --production[=true|false]
Yarn no instalará ningún paquete listado en devDependenciessi la NODE_ENVvariable de entorno está configurada en production. Use esta bandera para indicarle a Yarn que ignore NODE_ENVy tome su estado de producción o no de esta bandera en su lugar.

Notas: --production es lo mismo que --production=true. --prodes un alias de --production.

yarn install --pure-lockfile
No genere un yarn.lockarchivo de bloqueo.

yarn install --focus
Instala superficialmente las dependencias del espacio de trabajo del hermano de un paquete debajo de su node_modulescarpeta. Esto le permite ejecutar ese espacio de trabajo sin construir los otros espacios de trabajo de los que depende.

Debe ejecutarse dentro de un espacio de trabajo individual en un proyecto de espacios de trabajo. No se puede ejecutar en un proyecto que no sea un espacio de trabajo o en la raíz de un proyecto de un espacio de trabajo.

Obtenga más información sobre los espacios de trabajo enfocados.

yarn install --frozen-lockfile
No genere un yarn.lockarchivo de bloqueo y falle si se necesita una actualización.

yarn install --silent
Ejecute la instalación de hilo sin imprimir el registro de instalación.

yarn install --ignore-engines
Ignore la comprobación de motores.

yarn install --ignore-optional
No instale dependencias opcionales.

yarn install --offline
Ejecute la instalación de hilo en modo fuera de línea.

yarn install --non-interactive
Deshabilite las solicitudes interactivas, como cuando hay una versión no válida de una dependencia.

yarn install --update-checksums
Actualice las sumas de comprobación en el yarn.lockarchivo de bloqueo si hay una discrepancia entre ellas y la suma de comprobación de su paquete.

yarn install --audit
Comprueba si hay problemas de seguridad conocidos con los paquetes instalados. Se agregará un recuento de problemas encontrados a la salida. Utilice el yarn auditcomando para obtener detalles adicionales. A diferencia de npm, que ejecuta automáticamente una auditoría en cada instalación, yarn solo lo hará cuando se le solicite. (Esto puede cambiar en una actualización posterior, ya que se ha demostrado que la función es estable).

yarn install --no-bin-links
Evite que el hilo cree enlaces simbólicos para cualquier binario que pueda contener el paquete.

yarn install --link-duplicates
Cree vínculos físicos a los módulos repetidos en node_modules.

yarn install --verbose
Mostrar registros adicionales al instalar dependencias










flags
Installing one and only one version of a package: yarn install --flat
Forcing a re-download of all packages: yarn install --force
Installing only production dependencies: yarn install --production

https://classic.yarnpkg.com/en/docs/cli/install

--json
Formatee la salida como una secuencia NDJSON
--immutable
Abortar con un código de salida de error si se iba a modificar el archivo de bloqueo
--immutable-cache
Abortar con un código de salida de error si se iba a modificar la carpeta de caché
--check-cache
Vuelva a buscar siempre los paquetes y asegúrese de que sus sumas de comprobación sean coherentes
--inline-builds
Imprima detalladamente la salida de los pasos de compilación de las dependencias
--skip-builds
Omita el paso de compilación por completo


yarn --cwd <command> Podemos pasar una ruta y ejecutar el comando ddentro de la ruta

#yarn bin
Obtenemosla ruta bin, donde estan los bin de yarn


yarn dlx create-react-app ./my-app  esto seria como npx


yarn exec ejecuta comando de shell
yarn exec echo Hello World

yarn info package 
   --json flag para obtener todo en json

yarn link 
yarn link namelink

yarn unlink o yarn unlink [package]

yarn node scrp.js Esto llama node pero tiene sus ventajas analiza el proyecto y presume 
usar node de la mejor manera


yarn audit
1 for INFO
2 for LOW
4 for MODERATE
8 for HIGH
16 for CRITICAL



yarn autoclean [-I/--init] [-F/--force] limpiar dependencia pero no se recomienda hacerlo por que borra los archivos de manera directa
, ahora es recomendado usarlo solo en proyectos en los que no hacemos ignore de node_modules


yarn check
Verifies that versions of the package dependencies in the current project’s package.json match those in yarn’s lock file.

NOTE: The command yarn check has been historically buggy and undermaintained and, as such, has been deprecated and will be removed in Yarn 2.0. You should use yarn install --check-files instead.

The switches --integrity and --verify-tree are mutually exclusive.

yarn check --integrity
Verifies that versions and hashed values of the package contents in the project’s package.json match those in yarn’s lock file. This helps to verify that the package dependencies have not been altered.

yarn check --verify-tree
Recursively verifies that the dependencies in package.json are present in node_modules and have the right version. This check does not consider yarn.lock.



yarn dedupe //ya no esta disponible pero eliminaba los archivos duplicados.



yarn generate-lock-entry

yarn upgrade: 
yarn upgrade-interactive:

yarn import //importamos desde npm a yarn 


yarn list

yarn outdated


yarn pack //Empaquete en un gzip


yarn test


yarn upgrade
yarn upgrade left-pad
yarn upgrade left-pad@^1.0.0
yarn upgrade left-pad grunt
yarn upgrade @angular

 yarn why depd
 * 
 */