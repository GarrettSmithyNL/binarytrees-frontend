import React, {useEffect, useState} from 'react'
import {NavBar} from "../NavBar";

export const Tree = () => {

    const [input, setInput] = useState({});
    const [tree, setTree] = useState({});
    const [balancedTree, setBalancedTree] = useState({});
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
            const balancedTreeFromInput = input['balancedTreeFromInput'];
            if (balancedTreeFromInput && balancedTreeFromInput["root"]) {
                setBalancedTree(balancedTreeFromInput["root"]);
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
        <div className={'treePage'}>
            <NavBar/>
            <h2>Last Input: {numbers}</h2>
            <div className={'treeBody'}>
                <div className={'jsonPanel'}>
                    <h4>Unbalanced Tree</h4>
                    <pre>{JSON.stringify(tree, null, 4)}</pre>
                </div>
                <div className={'jsonPanel'}>
                    <h4>Balanced Tree</h4>
                    <pre>{JSON.stringify(balancedTree, null, 4)}</pre>
                </div>
            </div>


        </div>
    )
}
