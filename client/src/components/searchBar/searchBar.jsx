
import {useState} from "react"

function SearchBar (){

    const [name, setName] = useState("")

    function handleChange(e){
        setName(e.target.value)
    }

    return(
        <div>
            <input type="search" onChange={handleChange} value={name} />       
        </div>
    )



}


export default SearchBar