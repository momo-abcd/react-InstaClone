import React, { useEffect, useState }from 'react';
import axios from 'axios';

import { BrowserRouter, Route } from 'react-router-dom';
// import LoginForm from './components/LoginForm.js';
// import Smartphone from './components/Smartphone.js';
import MainLogin from './components/MainLogin.js';
import './App.css';


function App(props){
    const [host,setHost] = useState({data:''})

    useEffect(() => {
        _getHost();
    },[])

    const _getHost = async() => {
        const res = await axios.get('/test');
        // setHost({
        //     ...host,
        //     [data]:res.data
        // });
        setHost({data:res.data});

        console.log(res.data);
    }
    return (
        <>
            <BrowserRouter>
                <Route path="/">
                    <MainLogin />
                </Route>
                <Route path="/login">
                    <p>hello!</p>
                </Route>
                    </BrowserRouter>
            <p>{host.data}</p>
        </>
    );
}

export default App;