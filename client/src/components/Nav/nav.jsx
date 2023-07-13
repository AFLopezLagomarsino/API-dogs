// el nombre no es el correcto para las funcionalidades que tiene el componente, pero ya esta hecho de esta manera
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import {filterDogsByApiOrBd, orderAlphabet, orderByWeight} from "../../Redux/actions/actions"

export default function Nav() {
    const location = useLocation();
    const [mostrarBarra, setMostrarBarra] = useState(false);
    const dispatch = useDispatch()


    useEffect(() => {
        if (location.pathname === "/home") {
            setMostrarBarra(true);
        } else {
            setMostrarBarra(false);
        }
    },[location])

    function handleFilterApiBd (e){
        dispatch(filterDogsByApiOrBd(e.target.value))
    }

    function handleOrderByAlphabet(e){
        const order = e.target.value
        dispatch(orderAlphabet(order))
    }
    function handleOrderByWeight(e){
        const weight = e.target.value
        dispatch(orderByWeight(weight))
    }

    return (    
        <div>
            {mostrarBarra && <SearchBar />}
            <div>
                <NavLink to= "/about" style={{textDecoration: "none"}}>
                    <button>About</button>
                </NavLink>
                <NavLink to= "/dogs"style={{textDecoration: "none"}}>
                    <button> Create a Breed</button>
                </NavLink>
                <div>
                    <span>alfabeticamente:</span>
                    <select onChange={e=> handleOrderByAlphabet(e)}>
                        <option value= "asc">Ascendente</option>
                        <option value= "desc">Descendente</option>
                    </select>
                    <span>por peso:</span>
                    <select onChange={e=> handleOrderByWeight(e)}>
                        <option value= "asc">Ascendente</option>
                        <option value= "desc">Descendente</option>
                    </select>
                    <select onChange={e => handleFilterApiBd(e)}>
                        <option value="todos">todos</option>
                        <option value="BD">BD</option>
                        <option value="api">API</option>
                    </select>
                </div>
            </div>
        </div>
    )
}