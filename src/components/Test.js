import { ConstructionRounded } from '@mui/icons-material'
import { useState } from 'react'
import React, { useEffect} from 'react'

export default function Test({parentAge, happyBirthday }) { // the parameter is 'de-structured'


    // How do we create state?
    // since func dont have attr,
    // react created something called hook
    // the 2 hooks we need to learn are useState and useEfect
    // useState()
    // useState will return two things, a state var., and a func. to update state.
    //SYNTAX: const [myState, updateMyState ] = useState(initial_state_goes_here);
    const [age, setAge] = useState(9000)
    const [article, setArticles] = useState([])
    const [text, setText] = useState("")

    
    const handleClick = () => {
        setAge(age + 1)
 
    };

    //useEffect() ~~ Mounting lifecycle event
    //useEffect does not return anything
    //it takes in 2 arguments, a callback function, and an array of dependencies
    //syntax: useEffect( () => {}, [] )
    //useEffect will call the function everytime something in the array changes
    useEffect(() => {console.log('sideeffect is happening')},[age])

    // ok... so how does this effect mounting?
    // if the arr is empty, nothing will ever change
    // so the effect runs once and only once after first render
    useEffect(() => {console.log('this is like a mount')},[])


    // in a func. componenet,
    // whatever you return is what gets rendered
     
    return (
        <div>
            My age is {age}
            <button onClick={handleClick  }>+</button>

            My Parent's age is {parentAge}
            <button onClick={happyBirthday}>+</button>

        </div>
      
    ) 
}
