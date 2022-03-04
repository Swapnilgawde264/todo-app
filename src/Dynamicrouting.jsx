import React from 'react'
import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import User from './User'


 export default function Dynamicrouting() {

     const users = [
        { id: 1, name: "Rishab", email: "pant123@gmail.com" },
        { id: 2, name: "Dhoni", email: "dhoni123@gmail.com" },
        { id: 3, name: "rohit", email: "rohit123@gmail.com" },
        { id: 4, name: "virat", email: "virat123@gmail.com" },
        { id: 5, name: "dhawan", email: "dhawan123@gmail.com" }
    ]
    return (
        <div>
            <BrowserRouter>
                <h1>React Dymanic Routing</h1>

                {
                    users.map((item) =>
                        <div>

                            <Link to={"/user" + item.id}>{item.name} </Link>

                        </div>
                    )
                }
                <Routes>
                <Route path="/user:id" element={<User/>}></Route>
                </Routes>
            </BrowserRouter>
        </div >
    )
}
