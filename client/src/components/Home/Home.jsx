import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getDogs } from "../../Redux/actions/actions";
import Nav from "../Nav/nav";
import Card from "../card/card";
import Paginado from "../pagination/pagination";

function Home () {

    const dispatch = useDispatch()
    const allDogs = useSelector(state => state.dogs)
    //paginado owo
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage // 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage //
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)  
    

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDogs())
    },[])

    function handleClick(e){
        e.preventDefault()
        dispatch(getDogs())
    }

    return (
        <div>
            <h1>Home</h1>
            <Nav paginado={paginado} />
            <button onClick={e=>{handleClick(e)}}>refresh doguitos</button>
            <Paginado dogsPerPage={dogsPerPage} dogs={allDogs.length} paginado={paginado}/>
            <div>
                {
                    currentDogs && currentDogs.map(element=>{
                        return <Card name={element.name} image={element.image} temperaments={element.temperaments} weightMin={element.weightMin} weightMax={element.weightMax} key ={element.id}/>
                    })
                }
            </div>
            <Paginado dogsPerPage={dogsPerPage} dogs={allDogs.length} paginado={paginado}/>
        </div>

    )

}


export default Home