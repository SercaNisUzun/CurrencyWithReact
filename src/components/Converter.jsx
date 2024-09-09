import React from 'react'
import './Converter.css'
import axios from 'axios'
import { useState } from 'react'

let baseUrl = 'https://api.freecurrencyapi.com/v1/latest'
let keyUrl = 'fca_live_eueciekKKHAl7M9usvud30udZMy0YPiN0HxQrkJ7'


function Converter() {

    const [amount, setAmount] = useState(0);
    const [fromCur, setFromCur] = useState('USD');
    const [toCur, setToCur] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${baseUrl}?apikey=${keyUrl}&base_currency=${fromCur}`);
        const result = (response.data.data[toCur] * amount).toFixed(2);
        setResult(result)
    }

    return (
        <>
            <div className='container border'>
                <div className='flex'>
                    <h1>Currency Converter</h1>
                </div>

                <div className='flex'>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="" id="" />
                    <select onChange={(e) => setFromCur(e.target.value)} name="" id="">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                        <option>RUB</option>
                    </select>
                </div>

                <div className='flex'>
                    <input value={result} onChange={(e) => setResult(e.target.value)} type="number" name="" id="" />
                    <select onChange={(e) => setToCur(e.target.value)} name="" id="">
                        <option>TRY</option>
                        <option>EUR</option>
                        <option>USD</option>
                        <option>RUB</option>
                    </select>
                </div>

                <div className='flex'>
                    <button onClick={exchange}>CONVERT</button>
                </div>

            </div>
        </>

    )
}

export default Converter
