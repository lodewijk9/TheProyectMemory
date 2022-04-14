import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
    name:'score',
    initialState:{
        plays:0,
        correct:0,
        incorrect:0,
    },
    reducers:{
        Action_plays:(state, action) => {
            state.plays++;
        },
        Action_incorrect:(state, action) =>{
            state.incorrect++;
        },
        Action_correct:(state, action) =>{
            state.correct++;
        }
    }
})

export const {Action_plays} = scoreSlice.actions;
export const {Action_incorrect} = scoreSlice.actions;
export const {Action_correct} = scoreSlice.actions;
export default scoreSlice.reducer;