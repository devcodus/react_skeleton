import React, { Component } from 'react'
import Home from './views/Home'
import Nav from './components/Nav'
import News from './views/News'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Feed from './views/Feed'
import Todo from './views/Todo'
import Todo2 from './views/Todo2'
import Test from './components/Test'

 

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      test: 0,
      age: 9000,
      myList: [],
      
    }
  }

  addToDoSubmit = (e) => {
    e.preventDefault();
    const text = e.target.myText.value
    this.setState({myList: this.state.myList.concat([text])});
  };  

  deleteToDo = (indexToDelete) => {
    const copy = [...this.state.myList]
    copy.splice(indexToDelete, 1) 
    this.setState({myList: copy})
  };

  happyBirthday = () => {
    console.log('this button was clicked')
    // this.state.age += 1 //
    this.setState({age: this.state.age + 1})
}
  
  render() {
    return (
      
      <BrowserRouter>
      
      <div>
        
        <Nav/>

        <Routes>
          <Route path="/" element={<Home test = {this.state.test} x='5000' age = {this.state.age} happyBirthday={this.happyBirthday} />} />
          <Route path="/news" element={<News/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/todo2" element={<Todo2 myList={this.state.myList} addToDoSubmit= {this.addToDoSubmit} deleteToDo={this.deleteToDo}/>} />
          <Route path="/test" element={<Test parentAge={this.state.age} happyBirthday={this.happyBirthday} />} />
        </Routes>

      </div>

      </BrowserRouter>
    )
  }
}
