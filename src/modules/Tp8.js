import { OMDBSearchByPage } from './omdb-wrapper.js'
let resultado = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
};
resultado = await OMDBSearchByPage("cars", 1);
console.log(resultado);
console.log("Data =" + resultado.respuesta + "cantidad de resulta2 =" + resultado.cantidadTotal);
