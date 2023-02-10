import React, { Component } from 'react'
import CheckboxList from '../components/CheckBoxList'

export default class Todo2 extends Component {

  

  render() {

    return (
      <div>
        <form onSubmit={this.props.addToDoSubmit}>
        <input placeholder='Add a To Do Item ' name='myText'/>
        <button type='submit'>Add</button>  
        </form>
        <CheckboxList deleteToDo={this.props.deleteToDo} myList={this.props.myList}/>

      </div>
    )
  }
}
