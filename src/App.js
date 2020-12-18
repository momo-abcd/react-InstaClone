import React from 'react';
import LoginForm from './components/LoginForm.js';
import Smartphone from './components/Smartphone.js';
import './App.css';

function App(){
    return (
        <>
        <div className="container">
            <div id='smartphone'>
                <Smartphone/>
            </div>
            <div id='loginform'>
                <LoginForm />
            </div>
        </div>
        </>
    );
}

export default App;