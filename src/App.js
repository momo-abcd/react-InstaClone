// import React, { useState }from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLogin from './components/MainLogin.js';
import ReigsterForm from './components/RegisterForm.js';
import './App.css';


function App(props){
    const isLogin = async() => {
        const jwt = document.cookie.split('=')[1]
        const res = await axios.post('/test',{
            "jwt":jwt,
        });
        console.log(res);
    }
    // isLogin();
    const ccc = (e) => {
        isLogin();
    }

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <MainLogin />
                    </Route>
                    <Route path="/accounts/emailsignup" >
                        <ReigsterForm />
                    </Route>
                    {/* <Route path="/login">
                    <p>hello!</p>
                </Route> */}
                <Route path="/">page not found</Route>
                </Switch>
            </BrowserRouter>
            <button type='button' onClick={ccc}>클릭하시오</button>
        </>
    );
}

export default App;