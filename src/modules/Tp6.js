let miUrl = null;
let miObjeto = null;
function parsearUrl(laURL) {
    try {
        console.log("1");
         const url = new URL(laURL);

        return {
            host: url.origin,
            pathname: url.pathname,
            parametros: url.searchParams
        };

    } catch (error) {
        console.log("2")
        console.log("Error al parsear la URL:", error.message);

        return {
            host: null,
            pathname: null,
            parametros: null
        };
    }

}

// Prueba válida
console.log(parsearUrl('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo'));

// Prueba inválida
console.log(parsearUrl('esto no es una url'));


