import React from 'react'

export default function Login({logMeIn}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;    
    const password = e.target.password.value;


    const url = 'http://127.0.0.1:5000/api/login'
    const options = {
      method: "POST",
      headers: {
        Authorization:`Basic ${btoa(username+':'+password)}`
      }
    }


    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data)
    if(data.status == 'ok'){
      console.log('yay log me in')
      logMeIn(data.user)
    }
  };




  return (

    <div>
      <h1>Log In </h1>

      <form onSubmit={handleSubmit}>

        <input name='username' />

        <input name='password' type='password' />

        <button type="submit ">Log In</button>

      </form>
    </div>

  )
}
