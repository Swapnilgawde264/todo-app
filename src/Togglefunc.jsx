import React from "react";
import { useState } from "react";

export default function Togglefunc() {

    const [data, setdata] = useState({show:true})
    const [count,setcount] =useState({shownumb:true})

    const updatedata=()=> {
        setdata({show:!data.show})
    }

    const updatecount=()=>{
        setcount({shownumb:!count.shownumb})
    }

    return (
        <div>
            {
                data.show ?
                    <h1>Hide And Show</h1>
                    : null
            }
            <button onClick={updatedata}>Update data</button>
            <button onClick={updatecount}>toggle Number</button>

            {
                count.shownumb ?
                <h2>hello</h2>
                :null
            }
        </div>
    )
}