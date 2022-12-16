import * as types from "./actionTypes"

const initialState={
   name:[],
   isLoading: false,
   isError:false
}

export const reducer = (oldState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.GET_MEMBER_FAILED: return { ...oldState, isLoading: true }
        case types.GET_MEMBER_SUCCESS: return { ...oldState, name: payload,isLoading:false }
        case types.GET_MEMBER_FAILED:return{...oldState,isLoading:false,isError:true}
        default:
            return oldState
    }
}
