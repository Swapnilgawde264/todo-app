import React from "react";

export default function Props(prop){

    return(
        <div>
        <h1>{prop.characters.name}</h1>
        <h5>{prop.data}</h5>
        </div>
    )
}