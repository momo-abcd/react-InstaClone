import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import Smarthphone from '../components/Smartphone';
import MainLogin from '../components/MainLogin';
import Loading from '../components/Loading';
import Nav from '../components/mainComponents/Nav';

import { connect } from 'react-redux';

function AuthRoute({ auth }) {
    const [isLoading, setIsLoding] = useState(auth.isLoading);
    const [isAuth, setIsAuth] = useState(auth.isAuthenticated);

    console.log(123,auth.isAuthenticated);
    console.log(456,auth.isLoading);
     if(auth.isLoading){
        return ( <Loading /> )
    }
    if(auth.isAuthenticated){
        return (<Nav />)
    }else {
        return (<MainLogin />)
    }
}

// export default AuthRoute;
const mapStateToProps = (state) => ({
    auth:state.auth
});

export default connect(mapStateToProps, null)(AuthRoute);