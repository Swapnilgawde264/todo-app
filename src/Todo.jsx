import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

function Todo() {


    const [data, setdata] = useState([])


    const [task, settask] = useState("")

    const [update, setupdate] = useState(false)

    const [takeid, settakeid] = useState("")

    function addtask() {
        console.log(task);

        let usertask = { task }
        axios.post("http://localhost:3000/tasks", usertask);
    }

    const updatetask = () => {
        axios.patch(`http://localhost:3000/tasks/${takeid}`, { task: task });
        console.log(takeid);
        console.log(task);
        setupdate(false)
    }

    const deleteTask = (id) => {
        axios.delete(`http://localhost:3000/tasks/${id}`);
    }

    const editTask = (id) => {
        axios.get(`http://localhost:3000/tasks/${id}`).then((res) => {
            console.log(res);
            settask(res.data.task)
            setupdate(true)
        })

        settakeid(id)

    }
    useEffect(() => {
        axios.get("http://localhost:3000/tasks").then((res) => {
            setdata(res.data);
        })
    }, [deleteTask])

    return (

        <div className='maindiv'>



            <h1 className='heading1'>TodoInput</h1>
            <div className='inputdiv'>
                <input className='input' value={task} placeholder='New Todo' onChange={(e) => { settask(e.target.value) }}></input>
                {update ?
                    <button className='addbtn' onClick={updatetask} >Update Data</button>
                    :
                    <button className='addbtn' onClick={addtask}>Add New Task</button>
                }
            </div>

            <h1 className='heading2'>Todo's List</h1>
            {
                data.map((display, index) =>

                    <div className='displaytask'>
                        <div className='output'>
                            <span key={index}> {display.task} </span>
                        </div>
                        <div className='buttons'>

                            <button className='deltbtn' onClick={() => {
                                deleteTask(display.id)
                            }}>Delete</button>

                            <button className='editbtn' onClick={() => {
                                editTask(display.id)
                            }}>Edit</button>

                        </div>

                        <br></br>
                    </div>

                )
            }

        </div>
    )
}

export default Todo;
