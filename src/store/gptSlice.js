import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPT : false,
        gptSearchResponse : []
    },
    reducers: {
        toggleGPT : (state, action) => {
            state.showGPT = action.payload;
        },
        gptSearchResponse : (state, action) => {
            state.gptSearchResponse = action.payload;
        }
    }
})

export const { toggleGPT, gptSearchResponse } = gptSlice.actions;
export default gptSlice.reducer;