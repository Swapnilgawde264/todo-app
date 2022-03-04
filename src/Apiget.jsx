import React, { useEffect, useState } from 'react'

export default function Apiget() {

    const [data, setdata] = useState([])

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [userid, setuserid] = useState(null)

    function adduser() {
        console.log({name, email, address});
        let addData={name, email, address}
        fetch("http://localhost:3000/players", {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(addData)
        }).then((result)=>{
            // console.log("result",result);
            result.json().then((resp)=>{
                console.log("respo",resp);
                getlist()
            })
        })
    }

    useEffect(() => {
        getlist()
    }, [])

    function getlist() {
        fetch("http://localhost:3000/players").then((result) => {
            result.json().then((resp) => {
                {/* console.warn("result", resp) */ }
                setdata(resp)
                setname(resp[0].name)
                setemail(resp[0].email)
                setaddress(resp[0].address)
                setuserid(resp[0].id)
         
            })
        })
    }
    function deleteplayer(id) {

        fetch("http://localhost:3000/players/" + id, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log("respo", resp);
                getlist()
            })
        })
    }

    function selectuser(id) {
        console.log(data[id - 1])

        setname(data[id - 1].name)
        setemail(data[id - 1].email)
        setaddress(data[id - 1].address)
        setuserid(data[id - 1].id)
    }

    function updateuser() {
        let item = {name, email, address, userid}

        fetch("http://localhost:3000/players/" + userid, {
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.log("respo", resp);
                getlist()
            })
        })
    }
    return (
        <div>
            <h1>GEt Api call</h1>
            <table border="1px">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email Id</td>
                    <td>Address</td>
                    <td>Delete </td>
                    <td>Update </td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td><button onClick={() => deleteplayer(item.id)}>Delete</button></td>
                            <td><button onClick={() => selectuser(item.id)}>Update</button></td>
                        </tr>
                    )
                }
            </table> <br></br>
            <div className='inputdiv'>
                <label >Enter Your Name:</label> <br></br>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)}></input> <br></br>

                <label>Enter Your Email:</label><br></br>
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} ></input> <br></br>

                <label>Enter Your Address:</label><br></br>
                <input type="text" value={address} onChange={(e) => setaddress(e.target.value)}></input> <br></br>

                <button onClick={updateuser}>Update Data</button> <br></br>
                <button onClick={adduser}>Add Data</button>
            </div>
        </div>
    )
}
