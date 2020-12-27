import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

function AuthRoute({ isAuthenticated, component: Component, render, ...rest }) {
    // const auth = () => {
        const [isAuth,setIsAuth] = useState('');
        useEffect(async () => {
            if (localStorage.getItem('asd')) {
                const jwt = localStorage.getItem('asd');
                await axios.post('/test', {
                    "jwt": jwt,
                }).
                then(res => {
                    // setIsLogin(true);
                    setIsAuth(res.data);
                        // isAuthenticated.setIsAuth(data.data);
                        // rest.handleSetIsAuth(islogin);
                        console.log('AuthRoute isAUth는 ' , res);
                    })
            }
        });

    // }

    // checkAuth()
    
    return (
        <>
        <Route 
            {...rest}
            render={isAuth ? ((props) => {return (<p>나의 메인페이지!!</p>)}) : Component  }
        />
        <button onClick={()=> rest.handleSetIsAuth(true)}>true버어튼</button>
        <button onClick={() => rest.handleSetIsAuth(false)}>false버어튼</button>
        </>
    );
}

export default AuthRoute;