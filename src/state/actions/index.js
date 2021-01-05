import axios from 'axios';

// import all of your actions into this file, and export them back out. 
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose. 
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving. 
// Declare action TYPES at the top of the file


export const GET_ORGS_START = 'GET_ORGS_START';
export const GET_ORGS_SUCCESS = 'GET_ORGS_SUCCESS';
export const GET_ORGS_FAILURE = 'GET_ORGS_FAILURE';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = "GET_USER_FAILURE";



export const getOrgs = () => dispatch => {
    dispatch({type: GET_ORGS_START});
    axios
    .get('https://microfund-a-api.herokuapp.com/orgs/all')
    .then(res => {
        console.log('Orgs: ', res.data);
        dispatch({type: GET_ORGS_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: GET_ORGS_FAILURE, payload: err.message});
    });
    
}; 


export const getUser = () => dispatch => {
    dispatch({type: GET_USER_START});
    axios
    .get('https://microfund-a-api.herokuapp.com/users/user/4')
    .then(res=> {
        dispatch({type: GET_USER_SUCCESS, payload: res.data});
    })
    .catch(err=> {
        dispatch({type: GET_ORGS_FAILURE, payload: err.message});
    });
};
