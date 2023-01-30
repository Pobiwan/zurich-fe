
import { configureStore } from '@reduxjs/toolkit'
import userLoginReducer from '../reducers/userLoginReducer';

const userStore = configureStore({
  reducer: {
    userLogin: userLoginReducer
  }
})


export default userStore;