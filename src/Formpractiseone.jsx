import React from "react";
import { useState } from "react";

export default function Formpractiseone() {

    const [name, setname] = useState("");
    const [option, setoption] = useState("");
    const [check, setcheck] = useState("");
    const [print,setprint] = useState(false)


    function getalldata(e) {
        e.preventDefault()
        console.log(name);
        console.log(option);
        console.log(check);

        setprint(true)
    }

    return (
        <div>
        <h1>Formpractiseone</h1>
            <form onSubmit={getalldata}>
                <br></br><br></br>
                <input type="text" placeholder="Enter Name" onChange={(e) => setname(e.target.value)}></input>
                <br></br><br></br>
                <select onChange={(e) => setoption(e.target.value)}>
                    <option>Select Movie</option>
                    <option>Housefull</option>
                    <option>khatta Meetha</option>
                </select>
                <br></br><br></br>
                <input type="checkbox" onChange={(e) => setcheck(e.target.checked)}></input> <span>Accept Rules</span>
                <br></br><br></br>
                <button type="submit">Submit Data</button>
            </form>
            <br></br> <br></br>
           {
               print ?
               <div>
               <h1>{name}</h1>
               <h3>{option}</h3>
               <h5>{check}</h5>
               </div>
               :null
           }
        </div>
    )
}