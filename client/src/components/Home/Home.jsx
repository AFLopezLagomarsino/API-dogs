import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getDogs } from "../../Redux/actions.js/actions";
import Nav from "../Nav/nav";
import Card from "../card/card";

function Home () {

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogs)

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
            <Nav />
            <button onClick={e=>{handleClick(e)}}>
            refresh doguitos
            </button>
            <div>
                {
                    dogs && dogs.map(element=>{
                        return <Card name={element.name} image={element.image} temperaments={element.temperaments} weightMin={element.weightMin} weightMax={element.weightMax}/>
                    })
                }
            </div>
        </div>

    )

}


export default Home