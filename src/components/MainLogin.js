import React, { Component } from 'react';
import SmartPhone from './Smartphone.js';
import LoginForm from './LoginForm.js';

import './MainLogin.css';

function MainLogin(props){

    return (
        <div className="mainContainer">
            <div id='smartphone'>
                <SmartPhone />
            </div>
            <div id='loginform'>
                <LoginForm />
            </div>
        </div>

    );
}

export default MainLogin;