import { useRef } from "react";

function RefsDemo(){
    let nameInputref = useRef();
    
    function showNameEventHandler(){
        console.log(nameInputref.current.value)
    }


    return <>
        <span>Name:</span>
        <input type="text" ref={nameInputref}/>
        <button onClick={showNameEventHandler}>Show Name</button>
    </>
}

export default RefsDemo;