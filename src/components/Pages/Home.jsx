import React from 'react'
import {NavBar} from "../NavBar";

export const Home = () => {
    return (
        <div className={"homePage"}>
            <NavBar />
            <div className={'homeBody'}>
                <h3>Welcome to the Binary Tree Builder!</h3>
                <p>Please click "Enter Numbers" to begin!</p>
            </div>
        </div>
    )
}
