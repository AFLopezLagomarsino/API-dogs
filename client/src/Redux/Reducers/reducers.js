import { 
    GET_DOGS,
    ORDERBYALPHABET,
    FILTERBYAPIORBD,
    FILTERBYTEMPERAMENT,
    GETBYBREED,
    GET_TEMPERAMENTS,
    ORDERBYWEIGHT,
    DETAILBYID,
    POSTDOG,
    
} from "../actions/actions"
const initialState = {
    dogs: [],
    temperaments:[],
    dogsCopy:[]

}



function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsCopy: action.payload,
            }
        case FILTERBYAPIORBD:
            const dogsCopy = state.dogsCopy
            const filter = action.payload === "BD" ? dogsCopy.filter(dog => dog.createdInDb) : dogsCopy.filter(dog => !dog.createdInDb)
            return {
                ...state,
                dogs: action.payload === "All" ? state.dogsCopy : filter
            }
        case ORDERBYALPHABET:
            let orderSortAlphabet = action.payload === "asc" ?
            state.dogs.sort((a,b) =>{
                if (a.name > b.name){
                 return 1
                }
                if (a.name < b.name){
                    return -1
                }
                return 0
            }) :
            state.dogs.sort((a,b) =>{
                if (a.name < b.name){
                    return 1
                }
                if (a.name > b.name){
                    return -1
                }
                return 0
            })
            return {
                ...state,
                dogs: orderSortAlphabet   
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload,
                temperamentsCopy: action.payload
            }
        case GETBYBREED:
            return{
                ...state,
                dogs: action.payload
            }
        case DETAILBYID:
            return{
                ...state,
                dogs: action.payload
            }
        case ORDERBYWEIGHT:
            let orderSortWeight = action.payload === "asc"?
            state.dogs.sort((a,b)=>{
                const Aweight = Number(a.weightMin) || 0
                const Bweight = Number(b.weightMin) || 0
                if(Aweight > Bweight){
                    return 1
                }
                if(Aweight < Bweight){
                    return -1
                }
                return 0
            }) :
            state.dogs.sort((a,b) =>{
                const Aweight = Number(a.weightMax) || 0
                const Bweight = Number(b.weightMax) || 0
                if(Aweight < Bweight){
                    return 1
                }
                if(Aweight > Bweight){
                    return -1
                }
                return 0
            })
            return{
                ...state,
                dogs: orderSortWeight
            }
        case FILTERBYTEMPERAMENT:
            let dogsCopyT= state.dogsCopy     








        default:
            return {
                ...state
            }
    }

}

export default rootReducer