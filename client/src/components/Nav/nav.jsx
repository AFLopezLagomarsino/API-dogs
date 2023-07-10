import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav() {
    const location = useLocation();
    const [mostrarBarra, setMostrarBarra] = useState(false);

    useEffect(() => {
        if (location.pathname === "/home") {
            setMostrarBarra(true);
        } else {
            setMostrarBarra(false);
        }
    },[location])

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
                {/* todo esto va en orderBy y filter: completar y revisar ya que selene es diferente*/}
                <div>
                    <select>
                        <option value= "asc">Ascendente</option>
                        <option value= "desc">Descendente</option>
                    </select>
                    <select>
                        <option value="esto es el e target.value"></option>
                    </select>
                    <select>
                        <option value="todos"></option>
                        <option value="BD"></option>
                        <option value="api"></option>
                    </select>
                </div>
            </div>
        </div>
    )
}