import { configureStore } from '@reduxjs/toolkit'
import  isLoading  from './slices/isLoading.slice'
import  informacionSlice  from './slices/InformacionImg.slice'
import userSlice from './slices/user.slice'

export default configureStore({
    reducer: {
        isLoading:isLoading,
        informacionSlice:informacionSlice,
        user:userSlice
    }
})
