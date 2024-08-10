import React from "react";
import './Button.css'

function Button(props){
    console.log('button executed')
    return <button onClick={props.clickHandler} className="counterBtn">{props.children}</button>
}

export default React.memo(Button);