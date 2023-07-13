
import {useState} from "react"
import {getByBreed} from "../../Redux/actions/actions"
import { useDispatch } from "react-redux"
function SearchBar (){
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByBreed(name))
        setName("")
    }
    //ver si el bug de no busqueda se puede solucionar con un on Search
    return(
        <div>
            <input type="search" onChange={handleChange} value={name} placeholder="search breed..." />       
            <button type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )



}


export default SearchBar