import React, { Component } from 'react'
import Home from './views/Home'
import Nav from './components/Nav'
import News from './views/News'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Feed from './views/Feed'
import Todo from './views/Todo'

 

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      test: 0,
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
      
      <BrowserRouter>
      
      <div>
        
        <Nav/>

        <Routes>
          <Route path="/" element={<Home test = {this.state.test} x='5000' age = {this.state.age} happyBirthday={this.happyBirthday} />} />
          <Route path="/news" element={<News/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>

      </div>

      </BrowserRouter>
    )
  }
}
