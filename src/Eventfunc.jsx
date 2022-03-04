import React from "react";

export default function Eventfunc() {

    const testfun=()=>{
        alert("testfun is called")
    }

    return (
        <div>
            <button onClick={testfun}>click me</button>
        </div>
    )
}