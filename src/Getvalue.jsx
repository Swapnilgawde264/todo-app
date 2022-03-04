import React from "react";
import { useState } from "react";

export default function Getvalue() {

    const [data, setdata] = useState(null)
    const [print, setprint] = useState(false)

    function getdata(e) {
        console.log(e.target.value);
        setdata(e.target.value)
    }

    return (
        <div>
        <h1>Get input value</h1>
        <input type="text" onChange={getdata}></input>
        <button onClick={()=>setprint(true)}>Get Data</button>
            {
                print?
                    <h1>{data}</h1>
                    : null
            }
        </div>
    )
}