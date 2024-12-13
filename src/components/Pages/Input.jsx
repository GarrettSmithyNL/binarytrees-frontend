import React, {useState} from 'react'
import {NavBar} from "../NavBar";

export const Input = () => {
    const [input, setInput] = useState('');

    const URL = 'http://localhost:8080/input/post'

    const handleSubmit = async (event) => {
        event.preventDefault();
        const numbers = input.split(',').map(num => num.trim()).filter(num => num !== '');

        const postJSON = {'inputs': numbers}
        console.log(postJSON);

        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postJSON)
        });

        if (res.ok) {
            setInput('');
        }
        else {
            alert('Failed to Post');
            setInput('');
        }
    }


    return (
        <div>
            <NavBar />
            <form
                className={'inputForm'}
                onSubmit={handleSubmit}
            >
                <label
                    className={'inputLabel'}
                >
                    Enter a set of numbers (Ex. 1,2,3,4,5,...)
                </label>
                <input
                    type="text"
                    name={'inputText'}
                    value={input}
                    className={'inputText'}
                    onChange={(e) => {setInput(e.target.value)}}
                />
                <input
                    type="submit"
                    value={'Create Tree'}
                    className={'submitButton'}
                />
            </form>
        </div>
    )
}
