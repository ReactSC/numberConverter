import React, {useState} from 'react';
import './style.css';

const NumberConverter = () => {
    const [number, setNumber] = useState({
        input: Number,
        output: ''
    })

    const inputNumber = e => {
        var input = e.target.value;
        setNumber({
            ...number,
            input: input,
        })
    }

    var value = Number(number.input);
    const binary = () => {
        setNumber({
            ...number,
            output:value.toString(2)
        })
    }
    const octal = () => {
        setNumber({
            ...number,
            output:value.toString(8)
        })
    }
    const decimal = () => {
        setNumber({
            ...number,
            output:value.toString(10)
        })
    }
    const hexadecimal = () => {
        setNumber({
            ...number,
            output:value.toString(16)
        })
    }
    const base32 = () => {
        setNumber({
            ...number,
            output:value.toString(32)
        })
    }
     
    return(
        <div>
            <h1>Decimal Number Converter</h1>
            <input
                type="number"
                name="number"
                value={ number.input }
                onChange ={ inputNumber }
                placeholder="Input a Decimal Number..." />
            <div className="Actions">
            <button onClick={ ()=>binary() }>Binary</button>
            <button onClick={ ()=>octal() }>Octal</button>
            <button onClick={ ()=>decimal() }>Decimal</button>
            <button onClick={ ()=>hexadecimal() }>Hexadecimal</button>
            <button onClick={ ()=>base32() }>Base-32</button>
            </div>
            <p className="output">{number.output}</p>

            <hr/>
            
        </div>

    )
}
export default NumberConverter;