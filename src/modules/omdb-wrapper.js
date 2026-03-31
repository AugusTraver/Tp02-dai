import axios from "axios";
const APIKEY = "f91110dc";
const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    }; 

    let url = "http://www.omdbapi.com/?" + "apikey=" + APIKEY + "&s=" + searchText + "&page=" + page;
    
    console.log(url)
    const apiResponse = await axios.get(url)
    returnObject.respuesta = true;
    returnObject.datos = apiResponse.data.Search;
    returnObject.cantidadTotal = apiResponse.data.totalResults || null;
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