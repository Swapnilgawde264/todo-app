import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function Routingpage() {

    return (
        <BrowserRouter>
        <Link to="/home">New Home</Link> <br></br>
        <Link to="/about">New about</Link> <br></br>
        <Link to="/contact">Contact</Link>
            <Routes>
                <Route path="home" element={<Newhome />} />
                <Route path="about" element={<Newabout />} />
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
        </BrowserRouter>
    );
}

function Newhome() {

    return (
        <div>
            <h1>New home Page</h1>
            <p>This is home page of website</p>
        </div>
    )
}
function Newabout() {

    return (
        <div>
            <h1>New about Page</h1>
            <p>This is about page of website</p>
        </div>
    )
}

function Pagenotfound() {
    return(
        <div>
        <h1>404 Error</h1>
        <p>Page Not Found</p>
        </div>
    )
}

