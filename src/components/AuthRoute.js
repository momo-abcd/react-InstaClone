import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Smarthphone from '../components/Smartphone';
import MainLogin from '../components/MainLogin';

import { connect } from 'react-redux';

function AuthRoute({ auth }) {

        // const [isAuth,setIsAuth] = useState(isAuthenticated);
        const [isLoding, setIsLoding] = useState(true);
        // console.log(isLoding);
        useEffect(() => {
            // console.log(rest);
            setIsLoding(false);
            return setIsLoding(false);
        },[])
        console.log(auth);
    return (
        // <Route>
        //     {isAuthenticated ? <Smarthphone /> : 
        //     (isLoding ? <img src='/images/loding.jpg'></img> : Component)}
        // </Route>
        <Route>
            {/* <div>{auth ? <p>{auth}auth</p> : '456'}</div> */}
            <div>{auth.isAuthenticated ? 'login 성공' : <MainLogin />}</div>
        </Route>
    );
}

// export default AuthRoute;
const mapStateToProps = (state) => ({
    auth:state.auth
});

export default connect(mapStateToProps, null)(AuthRoute);