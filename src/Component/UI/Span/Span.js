import React from "react";


function span(props){
    console.log('span executed');
    return <span>{props.children[0]}</span>
}

export default React.memo(span);