import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
        setHotels : (states, actions) => actions.payload
    }
})

export const { setHotels } = hotelsSlice.actions;

export default hotelsSlice.reducer;

export const getHotelsThunk = url  => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setHotels(res.data)))
        .catch(err => console.log(err))
}
