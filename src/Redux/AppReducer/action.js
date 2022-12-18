import * as types from "./actionTypes"
import axios from "axios"



const Addname = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_MEMBER_REQUEST })
    
   return axios.post(`http://localhost:8080/member`, payload).then((r) => {
        dispatch({type:types.ADD_MEMBER_SUCCESS,payload:r})
    }).catch((e) => {
        dispatch({type:types.ADD_MEMBER_FAILED})
    })
    
}
const getname = () => (dispatch) => {
    dispatch({ type: types.GET_MEMBER_FAILED })
    
    return axios.get("http://localhost:8080/member").then((r) => {
        dispatch({type:types.GET_MEMBER_SUCCESS,payload:r.data})
    }).catch((e) => {
        dispatch({type:types.GET_MEMBER_FAILED,payload:e})
    })
}

const deletname = (id) => (dispatch) => {
    dispatch({ type: types.DELET_MEMBER_FAILED })
    
    return axios.delete(`http://localhost:8080/member/${id}`).then((r) => {
        dispatch({type:types.DELET_MEMBER_SUCCESS,payload:r})
    }).catch((e) => {
        dispatch({type:types.DELET_MEMBER_FAILED,payload:e})
    })
}
export {Addname,getname,deletname}

