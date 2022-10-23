import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface formState {
    value: boolean
}

const initialState: formState = {
    value: false
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        open: (state) => {
            state.value = true;
        },
        close: (state) => {
            state.value = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { open, close } = formSlice.actions

export default formSlice.reducer