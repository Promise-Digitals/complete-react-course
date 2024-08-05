import React from 'react';

function Button(props){
    return <button className="btn btn-primary" onClick={props.eventHandler} disabled={props.disable} >{props.children}</button>
}

export default Button;