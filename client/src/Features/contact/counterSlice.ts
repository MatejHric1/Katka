import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: 'YARC (yet another redux counter with reduc toolkit)'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (statem, action) => {
            statem.data += action.payload
        },
        decrement: (statem, action) => {
            statem.data -= action.payload
        },
    }
})

export const {increment, decrement} = counterSlice.actions;