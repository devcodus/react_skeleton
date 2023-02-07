import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state =  {
            name: 'David',
            age: 9000
        }
    }

    happyBirthday = () => {
        console.log('this button was clicked')
        // this.state.age += 1 //
        this.setState({age: this.state.age + 1})
    }

    render() {
        return (
            <div>
            <h1>This is the home page of {this.state.name}</h1>
            <p>{this.state.age}</p>
            <button onClick={this.happyBirthday}>+</button>

            <p>{this.props.test}</p>
            <p>{this.props.x}</p>
            </div>
        )
    }
}
