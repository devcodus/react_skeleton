import React, { useState } from 'react'
import CheckboxList from '../components/CheckBoxList'

export default function Todo3 (props) {

  

  

    return (
      <div>
        <form onSubmit={props.addToDoSubmit}>
        <input placeholder='Add a To Do Item ' name='myText'/>
        <button type='submit'>Add</button>  
        </form>
        <CheckboxList deleteToDo={props.deleteToDo} myList={props.myList}/>

      </div>
    )
  
}
