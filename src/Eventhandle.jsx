import React from "react";

export default class Eventhandle extends React.Component{

    testfun(){
        alert("testfun called")
    }
    render(){
        return(
            <div>
            <h1>Event Handle</h1>
            <button onClick={()=>this.testfun()}>Click Me</button>
            </div>
        )
    }
}
