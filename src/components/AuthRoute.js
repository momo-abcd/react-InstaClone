import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import Smarthphone from '../components/Smartphone';
import MainLogin from '../components/MainLogin';

import { connect } from 'react-redux';

function AuthRoute({ auth }) {
    const [isLoading, setIsLoding] = useState(auth.isLoading);
    const [isAuth, setIsAuth] = useState(auth.isAuthenticated);

    console.log(123,auth.isAuthenticated);
    console.log(456,auth.isLoading);
     if(auth.isLoading){
        return (<div>로딩중!!!!</div> )
    }
    if(auth.isAuthenticated){
        return (<div>로그인 되었음</div>)
    }else {
        return (<MainLogin />)
    }
}

// export default AuthRoute;
const mapStateToProps = (state) => ({
    auth:state.auth
});

export default connect(mapStateToProps, null)(AuthRoute);