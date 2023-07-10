import axios from "axios"

export const GET_DOGS = "GET_DOGS"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const CLEAR_FILTER = "CLEAR_FILTER"

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
