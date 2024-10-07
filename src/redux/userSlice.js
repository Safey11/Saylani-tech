import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        imgUrl: '',
    },
    reducers: {
        setImgUrl: (state, action) => {
            state.imgUrl = action.payload;
        },
    },
})

export const { setImgUrl } = userSlice.actions;

export default userSlice.reducer;