import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncButton from './AsyncButton';

function App() {
    const [numbers, setNumbers] = useState([10, 20, 30])

    const setNumber = (index, newNumber) => {
        const newNumbers = numbers.map((oldNumber, idx) => idx === index ? newNumber : oldNumber)
        setNumbers([...newNumbers])
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <AsyncButton setNumber={setNumber} value={numbers[0]} index={0}/>
                <AsyncButton setNumber={setNumber} value={numbers[1]} index={1}/>
                <AsyncButton setNumber={setNumber} value={numbers[2]} index={2}/>
            </header>
        </div>
    );
}

export default App;
