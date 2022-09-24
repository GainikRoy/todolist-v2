import React, { useState } from "react";

const Li = (event)=>{
    const [isDone, setDone] = useState(false);
    return <li style={{ textDecoration : isDone && 'line-through'}} onClick={()=> setDone(!isDone)}>{event.data}</li>
}

export default Li;