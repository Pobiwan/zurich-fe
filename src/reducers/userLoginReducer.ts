import { createSlice } from '@reduxjs/toolkit'

export interface userState {
    isUserlogin: boolean
}

const initialState: userState = {
    isUserlogin: false
} 

const userLoginSlice = createSlice({
    name: "userlogininfo",
    initialState,
    reducers:{
        logUserIn(state: userState){
            return {...state, isUserlogin: true}
        },
        logUserOut(state: userState){
            return {...state, isUserlogin: false}
        }
    }
})

export const { logUserIn, logUserOut } = userLoginSlice.actions

export default userLoginSlice.reducer