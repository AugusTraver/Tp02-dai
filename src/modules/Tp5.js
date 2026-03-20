function parsearUrl(laURL) {
    const url = new URL(laURL);

    return {
        host: url.origin,
        pathname: url.pathname,
        parametros: url.searchParams
    };
}

// Prueba
let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl(miUrl);

console.log(miObjeto);