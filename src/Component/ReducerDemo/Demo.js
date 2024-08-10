import './Demo.css';
import React, { useState } from 'react';


function Demo(){
    let [count, setCount] = useState(0);

    function incrementHandler(){
        setCount(count + 1)
    }

    function decrementHandler(){
        setCount(count - 1)
    }

    return(
        <div className="container">
            <button onClick={decrementHandler}> - </button>
            <span>{count}</span>
            <button onClick={incrementHandler}> + </button>
        </div>
    )
}

export default Demo;