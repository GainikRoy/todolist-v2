import React from "react";

const Inp = (event) => {

    return (
        <input type="text" placeholder="what u wanna do" value={event.inp} onChange={event.inpChng} />)
}

export default Inp;