import React from "react";
import Li from "./Li";

const List = (event) => {
    return (<div>
        <ul>
            {event.arr.map((i) => {
                return <Li data = {i} />
            })}
        </ul>
    </div>);
}

export default List;