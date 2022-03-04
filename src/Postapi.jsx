import React, { useState } from 'react'

export default function Postapi() {


    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")


    function saveuser() {
        console.log({name, email, address});
        let data={name, email, address}
        fetch("http://localhost:3000/players", {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            // console.log("result",result);
            result.json().then((resp)=>{
                console.log("respo",resp);
            })
        })
    }

    return (
        <div>
            <h1>Post api method</h1>

            <label >Enter Your Name:</label> <br></br>
            <input type="text" name="name" value={name} onChange={(e) => { setname(e.target.value) }}></input> <br></br> <br></br>

            <label>Enter Your Email:</label><br></br>
            <input type="text" name="email" value={email} onChange={(e) => { setemail(e.target.value) }}></input> <br></br> <br></br>

            <label>Enter Your Address:</label><br></br>
            <input type="text" name="address" value={address} onChange={(e) => { setaddress(e.target.value) }}></input> <br></br> <br></br>

            <button type="button" onClick={saveuser}>Save New User</button>
        </div>
    )
}
