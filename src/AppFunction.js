import React, { Component, useState, useEffect } from 'react'
import Home from './views/Home'
import Nav from './components/Nav'
import News from './views/News'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Feed from './views/Feed'
import Todo from './views/Todo'
import Todo2 from './views/Todo2'
import Todo3 from './views/Todo3'
import Test from './components/Test'
import Login from './views/Login'
import SignUp from './views/SignUp'



export default function App() {
    const [test, setTest] = useState(0)
    const [age, setAge] = useState(9000)
    const [myList, setMyList] = useState([])
    const [user, setUser] = useState({});

    const logMeIn = (user) => {
        setUser(user)
    }
    const logMeOut = () => {
        setUser({})
    }


    const addToDoSubmit = (e) => {
        e.preventDefault();
        const text = e.target.myText.value
        setMyList(myList.concat([text]))
    };

    const deleteToDo = (indexToDelete) => {
        const copy = [... myList]
        copy.splice(indexToDelete, 1)
        setMyList( copy )
    };
 
    const happyBirthday = () => {
        console.log('this button was clicked')
        // this.state.age += 1 //
        setAge(age + 1)
    }


    return (

        <BrowserRouter>

            <div>

                <Nav user ={user} logMeOut={logMeOut}/>

                <Routes>
                    <Route path="/" element={<Home test={test} x='5000' age={age} happyBirthday={happyBirthday} />} />
                    <Route path="/news" element={<News age={age} />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/todo2 " element={<Todo2 myList={myList} addToDoSubmit={addToDoSubmit} deleteToDo={deleteToDo} />} />
                    <Route path="/todo3" element={<Todo3 myList={myList} addToDoSubmit={addToDoSubmit} deleteToDo={deleteToDo} />} />
                    <Route path="/test" element={<Test parentAge={age} happyBirthday={happyBirthday} />} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/login" element={<Login logMeIn = {logMeIn}/>} />

                </Routes>

            </div> 

        </BrowserRouter>
    )

}
