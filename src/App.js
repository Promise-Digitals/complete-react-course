import './App.css';
import { useState, useEffect } from 'react';


function App(){
    
    let [resourceType, setResourceType] = useState('Home');
    useEffect(()=> {
        console.log(resourceType)
    }, [resourceType])

    return(<div className="App">
            <button onClick={() => {setResourceType('Home')}}>HOME</button>
            <button onClick={() => {setResourceType('About')}}>ABOUT</button>
            <button onClick={() => {setResourceType('Contact')}}>CONTACT</button>
            <h3>{resourceType}</h3>
        </div>
    );
}


export default App;