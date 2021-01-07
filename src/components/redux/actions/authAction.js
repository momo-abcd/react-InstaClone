import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING
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
    .then(res => 
        dispatch({
            type:USER_LOADED,
            payload:res
        })
    )
    .catch(err => {console.log(err)});
}