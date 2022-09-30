import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "#184723",
};

export const colorSlice = createSlice({
    name: "bgColor",
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;