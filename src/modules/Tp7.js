import { getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    let divisa
    if (getCurrency(codigoPais) != null)
    {
    divisa = getCurrency(codigoPais).name
    }
    else divisa = null
    return divisa;
}
