import React, { useEffect, useState }from 'react';
import LoginForm from './LoginForm.js';
import SmartPhone from './Smartphone.js';

import './MainLogin.css';

function MainLogin(props){

    return (
        <div class="mainContainer">
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