import './Demo.css';
import React, { useState } from 'react';
import Span from '../UI/Span/Span';


function Demo(){
    let [count, setCount] = useState(0);

    function incrementHandler(){
        setCount(count + 1)
    }

    function decrementHandler(){
        setCount(count - 1)
    }

    console.log('Demo executed')

    return(
        <div className="container">
            <button onClick={decrementHandler}> - </button>
            <Span>10</Span>
            <button onClick={incrementHandler}> + </button>
        </div>
    )
}

export default Demo;