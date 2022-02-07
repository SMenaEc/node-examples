const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, hasta, listar = false) => {

    try {
        let salida = `==============\n`;
        salida += `  Tabla del ${base}   \n`;
        salida += '==============\n';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) console.log(salida.yellow);
        
        return `tabla-${base}.txt `;
    } catch (err) {
        throw err
    }

    //return salida;
}

// fs.writeFile(`tabla-${numero}.txt`, crearArchivo(numero), (err) => {
//     if (err) throw err;
//     console.log(`tabla-${numero}.txt creado exitosamente`);
// });
// console.log( crearArchivo(numero) );

module.exports = {
    crearArchivo
}