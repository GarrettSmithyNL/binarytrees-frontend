import React from 'react'
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Link to={"/"}>
                <button>Home</button>
            </Link>
            <Link to={"/enter-numbers"}>
                <button>Enter Numbers</button>
            </Link>
            <Link to={"/process-numbers"}>
                <button>View Most Recent Tree</button>
            </Link>
            <Link to={"/previous-trees"}>
                <button>Previous Trees</button>
            </Link>
        </div>
    )
}
