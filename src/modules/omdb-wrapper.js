 import axios from "axios";
const APIKEY = "f91110dc";
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };
    let url = "http://www.omdbapi.com/?"+ "apikey=" + APIKEY + "t=" + searchText + "&page=" + page;
    const apiResponse = await axios.get(url)
    returnObject.respuesta= apiResponse.data;
    returnObject.cantidadTotal= apiResponse.data.Search.totalResults;
     return returnObject;   
};
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };
    // No seas vago, acá hay que hacer el cuerpo de la función!!!
    return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    // No seas vago, acá hay que hacer el cuerpo de la función!!!
    return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };