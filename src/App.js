import React, { Component, useState }from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLogin from './components/MainLogin.js';
import AuthRoute from './components/AuthRoute';
import ReigsterForm from './components/RegisterForm.js';
import './App.css';


import store from './components/redux/store';
import { loadUser } from './components/redux/actions/authAction';


export default class App extends Component{
   
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        store.dispatch(loadUser())
    }
  
  


    render(){
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <AuthRoute   />
                            {/* <MainLogin /> */}
                        </Route>
                        <Route path="/home" >
                            <ReigsterForm />
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
            </>
        );

    }

}
