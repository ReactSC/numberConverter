import React, { useState } from 'react';
import './style.css';

const InstantConvert = () => {
    const [num, setNum] = useState({
        inputNum: ''
    })

    const changeInput = e => {
        setNum({
            inputNum: e.target.value,
        })

        const binary = (num.inputNum).toString(2)
        
        console.log(num.inputNum, binary) // 5 101
    }

    return(
        <div>
            <input
            type="text"
            name="inputText"
            onChange={ changeInput }
            value={ num.inputNum }
            placeholder="Enter a Number" />

        </div>
    )
}

export default InstantConvert;