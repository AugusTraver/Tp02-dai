

import { OMDBSearchByPage } from './omdb-wrapper.js'
import { OMDBSearchComplete } from './omdb-wrapper.js'
import { OMDBGetByImdbID } from './omdb-wrapper.js'

let resultado = null;


//1
//resultado = await OMDBSearchByPage("cars", 1);
//console.log("OMDBSearchByPage", resultado);

//2
//resultado= await OMDBSearchComplete("Lord Of The Rings")
//console.log("OMDBSearchComplete", resultado)
 
//3
resultado = await OMDBGetByImdbID("tt0167260")
console.log("OMDBGetByImdbID", resultado)