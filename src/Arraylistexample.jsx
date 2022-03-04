import React from "react";
import { useState } from "react";


export default function Arraylistexample() {

    const [data, setdata] = useState("")
    const [arr, setarr] = useState([])

    function addData(){
        // setarr((arr)=>[...arr,data])
       /* console.log(...arr,data); */

        setarr([...arr,data])
        console.log(arr);   
    }


    return (
        <div>
            <h1>Hello Array List</h1>
            <input type="text" onChange={(e) => setdata(e.target.value)}></input> <br></br>
             <button onClick={addData}>Add To Array</button> <br></br>
             {
                 arr.map((item,i)=>
                 <div>
                 <h2 key={i}>{item} {i}</h2>
                 </div>
                 )
             }
        </div>
    )
}


