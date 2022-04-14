import { createSlice } from "@reduxjs/toolkit";

export const AllWordSlice = createSlice({
    name:"definitions",
    initialState: { 
        definitions : [{word:"A", meaning:"A"},{word:"B", meaning:"B"},{word:"C", meaning:"C"},{word:"D", meaning:"D"}] ,
    },
    reducers:{
        new_definition:(state, action) => {
            state.definitions.push(action.payload);
            console.log('New definition has been saved on reducer: ', action.payload)
            
        }
    }
});

export const { new_definition } = AllWordSlice.actions;
export default AllWordSlice.reducer;