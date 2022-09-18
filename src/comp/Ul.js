import React from "react";
import Li from "./Li";

const Ul = (props) => {
    const listele = dataArr.map((i) => {
        return <Li data={i} />
    });
    <div>
        <ul>
            {listele}
        </ul>
    </div>
};

