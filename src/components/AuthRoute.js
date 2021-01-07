import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Smarthphone from '../components/Smartphone';

function AuthRoute({ isAuthenticated, component: Component, render, ...rest }) {

        const [isAuth,setIsAuth] = useState(isAuthenticated);
        const [isLoding, setIsLoding] = useState(true);
        // console.log(isLoding);
        useEffect(() => {
            console.log(rest);
            setIsLoding(false);
            return setIsLoding(false);
        },[])
        
    return (
        <Route>
            {isAuthenticated ? <Smarthphone /> : 
            (isLoding ? <img src='/images/loding.jpg'></img> : Component)}
        </Route>
    );
}

export default AuthRoute;