import React, {useEffect, useState} from 'react'
import {NavBar} from "../NavBar";

export const LastTrees = () => {
    const [inputs, setInputs] = useState([]);
    const [numberStrings, setNumberStrings] = useState([]);
    const [selectedTree, setSelectedTree] = useState(null);
    const [selectedBalanceTree, setSelectedBalanceTree] = useState(null);

    useEffect(() => {
        getInputs();
    }, [])

    useEffect(() => {
        getNumberStrings();
    }, [inputs])

    const getInputs = async () => {
        const inputsFromServers = await fetchInputs();
        setInputs(inputsFromServers);
    }

    const fetchInputs = async () => {
        const res = await fetch("http://localhost:8080/input/all");
        if (res.ok) {
            console.log("Got the Inputs");
        } else {
            console.log("Failed to get Inputs")
        }
        return await res.json();
    }

    const getNumberStrings = () => {
        const inputNumbers = [];
        inputs.map((input, key) => {
            inputNumbers[key] = input['inputs'].join(',');
        })
        setNumberStrings(inputNumbers);
    }

    const handleShowTree = (index) => {
        setSelectedTree(inputs[index].treeFromInput.root);
        setSelectedBalanceTree(inputs[index].balancedTreeFromInput.root);
    };


    return (
        <div>
            <NavBar />
            <div className={'lastBody'}>
                <div>
                    <h2>Previous Trees</h2>
                    <h4>Oldest to Newest</h4>
                    <div>
                        {numberStrings.map((numbers, index) => (
                            <div className={'numberListItem'} key={index}>
                                <h4>{index + 1}.)</h4>
                                <p>{numbers}</p>
                                <button
                                    className={'showButton'}
                                    onClick={() => handleShowTree(index)}
                                >
                                    Show Tree
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedTree && selectedBalanceTree && (
                    <div className={'treeHolder'}>
                        <div>
                            <h3>Unbalanced Tree</h3>
                            <pre>{JSON.stringify(selectedTree, null, 4)}</pre>
                        </div>
                        <div>
                            <h3>Balanced Tree</h3>
                            <pre>{JSON.stringify(selectedBalanceTree, null, 4)}</pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
