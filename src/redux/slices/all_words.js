import { createSlice } from "@reduxjs/toolkit";

export const AllWordSlice = createSlice({
    name:"definitions",
    initialState: { 
        definitions : [{word:"Memory+", meaning:"Memoria+"}] ,
    },
    reducers:{
        new_definition:(state, action) => {
                state.definitions.push(action.payload);
                //alert('New definition has been saved on reducer Successfully: ', action.payload)            
        },
        delete_definition:(state, action) => {
            if(state.definitions.length <=1){
                alert('.....Add a new definition to delete this one!....')
            }else{
                state.definitions.splice(action.payload, 1)
                console.log(`was deleted element in position since store ${action.payload}`)
            }
        }
    }
});

export const { new_definition } = AllWordSlice.actions;
export const { delete_definition } = AllWordSlice.actions;
export default AllWordSlice.reducer;