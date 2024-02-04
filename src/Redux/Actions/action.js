import * as actionTypes from './actionTypes';
import axios from 'axios';

export const postApiStarted = () => ({
  type: actionTypes.FETCH_DATA_REQUEST,
});

export const postDataSuccess = (data) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const postDataFailure = (error) => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload: error,
});


// action creator
export function postRequest(){
    return (dispatch)=>{ // dispatch is given by thunk
        dispatch(postApiStarted());
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => dispatch(postDataSuccess(response.data)))
        .catch(err => dispatch(postDataFailure(err.message)))
    }
}