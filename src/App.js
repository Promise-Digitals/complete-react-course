import './app.css'

function App(){
    let msg = 'awesome';
    return (<div>
        <h1 className="myHeader">Header</h1>
        <p className="myParagraph">This is my first {msg} component.</p>
    </div>);
}

export default App;