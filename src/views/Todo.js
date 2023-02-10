import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            inputText:"",
            savedText:[]
        }
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const term = e.target.input1.value
        const term1 = e.target.input1.value
        console.log(term)
        return term
    }
    
    handleChange = (e) => {
        e.preventDefault(); //1// this is still not preventing a reload?
        this.setState({inputText: e.target.value})
        // e.preventDefault();
        // const term = e.target.input1.value
        // const term1 = e.target.input1.value
        // console.log(term)
        // return term
    }
    
    handleSubmit2 = (e) => {
        e.preventDefault();
        // this.setState({inputText: e.target.value})
        let newText = [...this.state.savedText, this.state.inputText]
        console.log(this.state.inputText)
        this.setState({savedText:newText})
    }
    
    render(term) {
        console.log('To-Do')
        return (
            <div> <h1>To-do List</h1> 

                <form onSubmit={this.handleSubmit}>
                    <input placeholder='uncontrolled' name='input1'/>
                    <button type='submit'>Add</button>
                </form>
                <form onSubmit={this.handleSubmit2}>  
                    <input placeholder='controlled' value={this.state.inputText.append} onChange={this.handleChange}/>
                    <input value="Add" type='submit'/>
                </form>
                <ul>
                    
                    <li>{this.state.inputText}</li>
                    <li>{term}</li>
                </ul>
            </div>
                    )
  }
}

//3// how to do jinja style for loops to run js code to conditionally render multiple list items? no, but one-liners are okay (use map instead of for loop)

// WebDevSimplified is top tier youtube video!
// chat.openAI: componentDidMount?

//NEXT STEP: map over the list items and pass them as a child component

//react was created for state mgmt