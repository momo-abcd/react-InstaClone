import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS
} from './types';


// check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({type:USER_LOADING});

    // Get token from localstorage
    const token_ = getState().auth.token;
    const config = {
        jwt:token_
    }
    axios
    .post('/auth',config)
    .then(res => {
        dispatch({
            type:USER_LOADED,
            payload:res
        })
    })
    .catch(err => {
        dispatch({
            type:AUTH_ERROR
        });
    })
    .catch(err => {console.log(err)});
}

export const login = ( {email_, password_ } ) => (dispatch, getState) => {
    console.log('authAction.js login 함수실행');
    axios.post('/login', {
        email:email_,
        password:password_
    })
    .then(res => {
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    })
    .catch(err => {
        console.log('error is occured');
    });
}