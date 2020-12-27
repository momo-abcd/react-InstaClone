import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import MainLogin from './components/MainLogin.js';
import RegisterForm from './components/RegisterForm.js';
import AuthRoute from './hoc/AuthRoute.js';
import './App.css';


function App(props){
    // const auth= () => {
        const [isAuth, setIsAuth] = useState(false);
        // console.log('맨 처음 isAuth의 갑스',isAuth)
        // console.log('현재 isAuth의 값은 ', isAuth)
        // useEffect(async () => {
        //     if (localStorage.getItem('asd')) {
        //         const jwt = localStorage.getItem('asd');
        //         const res = await axios.post('/test', {
        //             "jwt": jwt,
        //         }).
        //             then(data => {
        //                 console.log('현재 isAuth의 값: ',isAuth);
        //                 setIsAuth(true);
        //             })
        //     } else {
        //         console.log('jwt가 없습니다.');
        //     }
        // })
    // }
    const handleSetIsAuth = (e) => {
        setIsAuth(e);
    }
    
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                    <AuthRoute component={ MainLogin } handleSetIsAuth={e => handleSetIsAuth(e)} isAuthenticated={isAuth}/>
                    </Route>
                    <Route path="/accounts/emailsignup" >
                        <RegisterForm />
                    </Route>
                    <AuthRoute path="/temp/" component={ RegisterForm } isAuthenticated={isAuth}/>
                <Route path="/">page not found</Route>
                </Switch>
            <Link to="/temp">클릭하시오</Link>
           </BrowserRouter>
        </>
    );
}

export default App;