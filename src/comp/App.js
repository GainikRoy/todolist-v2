import React, { useState } from "react";
import List from "./list";

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
            <List arr={dataArr} />
        </div>
    );
}

export default App;

// 
//CHALLENGE: I have extracted the Input Area, including the <input> and
//<button> elements into a seperate Component called InputArea.
//Your job is to make the app work as it did before but this time with the
//InputArea as a seperate Component.

// DO NOT: Modify the ToDoItem.jsx
// DO NOT: Move the input/button elements back into the App.jsx

//Hint 1: You will need to think about how to manage the state of the input element
//in InputArea.jsx.
//Hint 2: You will need to think about how to pass the input value back into
//the addItem() function in App.jsx.
