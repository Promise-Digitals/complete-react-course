import React from "react";


function span(props){
    console.log('span executed');
    return <span>{props.children}</span>
}

export default span;