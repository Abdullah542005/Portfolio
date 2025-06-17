import { createSlice } from "@reduxjs/toolkit";


export const  PVMenu  = createSlice({
    name:"PVMenu",
    initialState:{
        visibility:false,
        content:{}
    },
    reducers:{
        setVisibilityFalse:(state)=>{state.visibility = false},
        setVisibilityTrue:(state)=>{state.visibility = true},
        setContent:(state,action)=>{state.content = action.payload}
    }
})

export const {setVisibilityTrue,setVisibilityFalse,setContent} = PVMenu.actions