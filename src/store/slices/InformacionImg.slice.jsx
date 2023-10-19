import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const informacionSlice = createSlice({
    name: 'informacionSlice',
    initialState: [],
    reducers: {
        setInformacion:(state,action)=>{
            const informacion=action.payload
            return informacion
        }
    }
})
export const thunkgetInformacion = (color) => (dispatch) => {
    dispatch(setIsLoading(true));
    console.log(color)
    const url = color
    ? `http://localhost:8080/informacion?color=${color}`
    : 'http://localhost:8080/informacion';
    return axios.get(url)
        .then((res) => dispatch(setInformacion(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setInformacion } = informacionSlice.actions;

export default informacionSlice.reducer;
