import React from "react";

export default class Toggle extends React.Component{

    constructor(){
        super();
        this.state={
            show:true
        }   
    }

    updatestate(){
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return(
            <div>

            {
                this.state.show ?
                <h1>Hide And Show</h1> 
                :null
            }
            <button onClick={()=>{this.updatestate()}}>Toggle</button>
            </div>
        )
    }
}