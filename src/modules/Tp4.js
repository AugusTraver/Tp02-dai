import fs from 'fs';
import { copyFile, constants } from 'node:fs';

const ARCHIVO_ENTRADA = "./src/modules/archivo-entrada.txt";
const ARCHIVO_SALIDA = "./src/modules/archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

    function copiar(origen, destino) {

        const existeDestino = fs.existsSync(destino);
        if(existeDestino) {
            console.log("wachin no podes copiar ahi ya hay algo");
            return;
        }
        function callback(err) {
            if (err) throw err;
            console.log('source.txt was copied to destination.txt');
        }

        // destination.txt will be created or overwritten by default.
        copyFile(origen, destino, callback);

        // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
        copyFile(origen, destino, constants.COPYFILE_EXCL, callback);

    };
