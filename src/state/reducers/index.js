// import all of your reducers into this file, and export them back out. 

// This allows for the simplification of flow when importing reducers into your actions throughout your appp.
import {
GET_ORGS_START,
GET_ORGS_SUCCESS,
GET_ORGS_FAILURE,
GET_USER_FAILURE,
GET_USER_START,
GET_USER_SUCCESS,
} from "../actions";


export const initialState = {
    isLoading: false,
    orgs: [],
    applcations: [],
    errorMessage: "",
    user: {
        description:"",
        firstname: "",
        lastname:"",
        username:"",
    }
};


export const microfundReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_USER_START:
        return{...state, isLeading:true, errorMessage: null};
    case GET_USER_SUCCESS:
        return{
            ...state,
            user: action.payload,
            isLoading: false,
            erorrMessage:null,
        };
    case GET_USER_FAILURE:
        return{...state, isLoading: false, errorMEssage: action.payload};
    case GET_ORGS_START:
        return{ ...state, isLoading: true, errorMessage: null};
    case GET_ORGS_SUCCESS:
        return{
            ...state,
            orgs: action.payload,
            isLoading: false,
        };
    case GET_ORGS_FAILURE:
        return{
            ...state,
            errorMessage: action.payload
        };
    default:
        return state;
    };
};


export default microfundReducer;