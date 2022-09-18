import React, { useState } from "react";

function App() {
    const [dataArr, setArr] = useState([]);
    const [inp, setInp] = useState('');


    const inpChng = (event) => setInp(event.target.value);

    const addItem = () => {
        if(inp === '') return;
        setArr((prevarr) => {
            return [...prevarr, inp]
        });
        setInp('');
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" placeholder="what u wanna do" value={inp} onChange={inpChng} />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {dataArr.map((i) => {
                        return <li>{i}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
