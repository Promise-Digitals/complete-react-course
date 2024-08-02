import React from 'react';

function Button(props){
    console.log("button has been executed");
    return <button className="btn btn-primary" onClick={props.eventHandler}>{props.children}</button>
}

export default Button;