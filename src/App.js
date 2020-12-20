import React, { useEffect, useState }from 'react';
import axios from 'axios';


import LoginForm from './components/LoginForm.js';
import Smartphone from './components/Smartphone.js';
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
        <div className="container">
            <div id='smartphone'>
                <Smartphone/>
            </div>
            <div id='loginform'>
                <LoginForm />
            </div>
            <p>{host.data}</p>
        </div>
        </>
    );
}

export default App;