import React, {useEffect, useState} from 'react'
import {NavBar} from "../NavBar";

export const Tree = ({inputId}) => {

    const [tree, setTree] = useState([]);

    useEffect(() => {
        getTree(inputId);
    }, [inputId])

    const getTree = async (inputId) => {
        const treeFromServer = await fetchTree(inputId);
        setTree(treeFromServer);
    }

    const fetchTree = async (inputId) => {
        const res = await fetch("http://localhost:8080/tree/1");
        return await res.json();
    }



    return (
        <div>
            <NavBar />
            <pre>{JSON.stringify(tree, null, 4)}</pre>
        </div>
    )
}
