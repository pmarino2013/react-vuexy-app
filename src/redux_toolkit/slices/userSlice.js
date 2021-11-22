import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:{ }
}

export const userSlice = createSlice({
    name:'usuario',
    initialState,
    reducers:{
        logIn:(state, action) => {
state.user = action.payload
        }
    }
})


export const {logIn} = userSlice.actions
export default userSlice.reducer
