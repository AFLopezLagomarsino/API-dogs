import React from "react"
import {NavLink} from "react-router-dom"

function landingPage () {

    return (
        <div>
            <h1>Welcome!</h1>
            <NavLink to="/home" style={{textDecoration :"none"}}>
            <button>Home</button>
            </NavLink>
        </div>
    )

}

export default landingPage