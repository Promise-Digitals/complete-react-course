import './Demo.css';
import React, { useState } from 'react';
import Span from '../UI/Span/Span';
import Button from '../Button/Button';


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
            <Button clickHandler={decrementHandler}> - </Button>
            <Span>{10}</Span>
            <Button clickHandler={incrementHandler}> + </Button>
        </div>
    )
}

export default Demo;