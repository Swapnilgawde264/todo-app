import React from "react";

export default class Newprofile extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'peter',
            email: 'peter123@gmail.com',
            count: 0
        }
    }

    updatestate() {
        this.setState({
            name: 'Bruce',
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => { this.updatestate() }}>Update Name</button>
            </div>
        )
    }
}