import * as types from "../Routes/actionTypes"
import { USER_LOGIN_SUCCESS } from "../Routes/actionTypes";


const loginSuccess=()=>{
    return{
        type: USER_LOGIN_SUCCESS
        
    }
}
export {loginSuccess}