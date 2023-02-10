import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // this can change
import AppFunction from './AppFunction'; // this can change



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <App /> // this is also variable
    <AppFunction /> // this one only activates todo function, not todo class for some reason.
   

);
