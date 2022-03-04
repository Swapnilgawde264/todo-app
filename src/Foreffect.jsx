import React, { useState } from "react";
import { useEffect } from "react";

function Foreffect() {

    const [count, setcount] = useState(100)
    const [data, setdata] = useState(10);

    useEffect(() => {
        console.log("count is :" + count);
    },[count])
    
    useEffect(() => {
        console.warn("called with data state");
    },[data])

    return (
        <div>
            <h1>UseEffect In React Count : {count} , {data}</h1>
            <button onClick={() => setcount(count + 1)}>Update Count</button>
            <button onClick={() => setdata(data + 1)}>Update Data</button>
        </div>
    )
}

export default Foreffect;