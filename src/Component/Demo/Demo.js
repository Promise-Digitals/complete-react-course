import './Demo.css';
import React, { useState, useCallback, useMemo } from 'react';
import Span from '../UI/Span/Span';
import Button from '../Button/Button';


function Demo(){
    let [count, setCount] = useState(0);
    let [activate, setActivate] = useState(false);

    let incrementHandler = useCallback(function(){
        (activate) && setCount(count + 1)
        }, [activate])

    let decrementHandler = useCallback(function(){
        (activate) && setCount(count - 1)
    }, [activate])

    function activatetHandler(){
        setActivate(true);
    }

    let list = useMemo(()=> {
        return [100, 200]
    }, [])

    console.log('Demo executed')

    return(
        <div className="container">
            <Button clickHandler={decrementHandler}> - </Button>
            <Span>{list}</Span>
            <Button clickHandler={incrementHandler}> + </Button>
            <Button clickHandler={activatetHandler}>Activate</Button>
        </div>
    )
}

export default Demo;