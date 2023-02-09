import React, { Component } from 'react'

export default class Todo extends Component {
    
    
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const term = e.target.input1.value
        const res = await fetch();
        const data = await res.json();
    }
    
    
    render() {
        console.log('To-Do')
        return (
            <div> <h1>To-do List</h1> 
                <form > 
                    <input placeholder='uncontrolled' name='input1'/>
                    <button>Search</button>
                </form>
                
                <form>  
                    <input placeholder='controlled' />
                    <button>Search</button>
                </form>
            </div>
                    )
  }
}