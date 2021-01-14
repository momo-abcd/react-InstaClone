import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS
} from '../actions/types';

const initialstate = {
    token: localStorage.getItem('asd'),
    isAuthenticated:null,
    isLoading: false,
    user:null
};

export default function(state = initialstate, action){
    switch(action.type) {
        case USER_LOADING:
            console.log('USER_LOADING')
            return {
                ...state,
                isLoading:true
            };

        case USER_LOADED :
            return {
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload
            };

        case LOGIN_SUCCESS:
            console.log('authReducer.js 의LOGIN_SUCCESS 실행');
            localStorage.setItem('asd',action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }

        case AUTH_ERROR:
            localStorage.removeItem('asd');
            return {
                ...state,
                token:null,
                user: null,
                isAuthenticated:false,
                isLoading:false
            }


            default :
            return state;
    }
}