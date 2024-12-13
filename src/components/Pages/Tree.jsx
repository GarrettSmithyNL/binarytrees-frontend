import React, {useEffect, useState} from 'react'
import {NavBar} from "../NavBar";

export const Tree = () => {

    const [input, setInput] = useState({});
    const [tree, setTree] = useState({});
    const [numbers, setNumbers] = useState("");

    useEffect(() => {
        getInput();
    },[]);

    useEffect(() => {
        if (Object.keys(input).length > 0) {
            const treeFromInput = input['treeFromInput'];
            if (treeFromInput && treeFromInput["root"]) {
                setTree(treeFromInput["root"]);
            }
        }
    }, [input])

    useEffect(() => {
        if (Object.keys(input).length > 0) {
            const nums = input['inputs'];
            if (nums) {
                const numString = nums.join(',');
                setNumbers(numString);
            }
        }
    }, [tree]);


    const getInput = async () => {
        const inputFromServer = await fetchInput();
        setInput(inputFromServer);
    }

    const fetchInput = async () => {
        const res = await fetch("http://localhost:8080/input/last");
        if (res.ok){
            console.log('got the object')
        }
        else
            console.log('failed to find')
        return await res.json();
    }

    return (
        <div>
            <NavBar/>
            <h2>Last Input: {numbers}</h2>
            <div>
                <h4>JSON Version</h4>
                <pre>{JSON.stringify(tree, null, 4)}</pre>
            </div>


        </div>
    )
}
