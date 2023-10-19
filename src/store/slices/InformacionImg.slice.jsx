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
    ? `https://facebooknode-dev-xnkg.1.ie-1.fl0.io/informacion?color=${color}`
    : 'https://facebooknode-dev-xnkg.1.ie-1.fl0.io/informacion';
    return axios.get(url)
        .then((res) => dispatch(setInformacion(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setInformacion } = informacionSlice.actions;

export default informacionSlice.reducer;
