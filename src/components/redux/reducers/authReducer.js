import {
    USER_LOADING,
    USER_LOADED
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
            return {
                ...state,
                isLoading:true
            };

        case USER_LOADED :
            console.log(USER_LOADED, action.payload)
            return {
                ...state,
                isAuthenticated:true,
                isLoding:false,
                user:action.payload
            };


            default :
            return state;
    }
}