import React from "react";
import { useState } from "react";

export default function Formhandle() {

    const [name, setname] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setinterest] = useState("");
    const [print, setprint] = useState({ show: false })


    function getformdata(e) {
        e.preventDefault()
        console.log(name, interest, tnc);
    }



    return (
        <div>
            <br></br>
            <form onSubmit={getformdata}>
                <input type="text" placeholder="Enter Name" onChange={(e) => setname(e.target.value)}></input> <br></br> <br></br>
                <select onChange={(e) => setinterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Rohit</option>
                    <option>Virat</option>
                    <option>Shikhar</option>
                </select> <br></br> <br></br>
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} ></input> <span>Accept T&C</span>
                <br></br> <br></br>
                <button type="submit" onClick={()=>{setprint({show:true})}}>submit</button>
            </form>

            {
                print.show ?
            <h1>{name} {interest}</h1>
            :null
            }


        </div>
    )
}