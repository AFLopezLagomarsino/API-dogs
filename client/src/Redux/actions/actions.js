import axios from "axios"

export const GET_DOGS = "GET_DOGS" //check
export const ORDERBYALPHABET = "ORDERBYALPHABET" //check
export const FILTERBYAPIORBD = "FILTERBYAPIORBD" //check
export const FILTERBYTEMPERAMENT = "FITLERBYTEMPERAMENT" //check
export const GETBYBREED = "GETBYBREED" //check
export const GET_TEMPERAMENTS = "GETTEMPERAMENTS" //check
export const ORDERBYWEIGHT = "ORDERBYWEIGHT" //check
export const DETAILBYID = "DETAILBYID" //check
export const POSTDOG = "POSTDOG" //check

export function getDogs (){
    try {
        return async function(dispatch){
            const dogos = await axios.get("http://localhost:3001/dogs")
            return dispatch({
                type: GET_DOGS,
                payload: dogos.data
            })
        }
    //eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error)
    }
}
export function getTemperaments(){
    try {
        return async function (dispatch) {
            const temperaments = await axios.get("http://localhost:3001/temperaments")
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: temperaments.data
            })
        }
    //eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error)
    }
}
export function getByBreed(name){
    try {
        return async function (dispatch){
            let {data} = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            if(data.length === 0){
                window.alert("esa raza no existe, creala!")
                return;
            }
            return dispatch({
                type: GETBYBREED,
                payload: data
            })
        }
    //eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error)
    }
}
export function filterDogsByApiOrBd(payload){
    return{
        type: FILTERBYAPIORBD,
        payload
    }
}
export function filterByTemperament(payload){
    return{
        type: FILTERBYTEMPERAMENT,
        payload
    }
}

export function orderAlphabet(payload){
    return{
        type: ORDERBYALPHABET,
        payload
    }
}
export function orderByWeight(payload){
    return{
        type: ORDERBYWEIGHT,
        payload
    }
}
export function detailById(payload){
    try {
        return async function(dispatch){
            const detail = await axios.get(`http://localhost:3001/dogs/${payload}`)
            return dispatch({
                type: DETAILBYID,
                payload: detail.data
            })
        }

    //eslint-disable-next-line no-unreachable  
    } catch (error) {
        console.log(error)
    }
}
export function postDog(payload){
    try {
        return async function(dispatch){
        const post = await axios.post("http://localhost:3001/dogs", payload)
            return dispatch({
                type: POSTDOG,
                payload: post.data
            })
        }
    //eslint-disable-next-line no-unreachable    
    } catch (error) {
        console.log(error)
    }
    
}