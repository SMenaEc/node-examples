const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors')

console.clear();

//console.log( process.argv );
console.log( argv );

//const base = 15;

crearArchivo(argv.b, argv.h, argv.l)
    .then( archivo => console.log(archivo.rainbow + 'creado exitosamente'.green) )
    .catch( console.log );
