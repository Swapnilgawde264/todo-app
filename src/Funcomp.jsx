import React from "react";

export default function Funcomp(prop) {

    const red = ()=>{
        alert("Hello Onclick")
    }
    return (
    <div>
    <h1>This is functional component</h1>
    <h1 onClick={red}>{prop.text}</h1>
    <h2>{prop.text}</h2>
    <h1>{prop.data.name}</h1>
    </div>
)
}