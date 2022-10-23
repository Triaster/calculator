import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface modePageState {
    value: "light" | "dark"
}

const initialState: modePageState = {
    value: "light"
}

export const modePageSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = state.value === "light" ? "dark" : "light";
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = modePageSlice.actions

export default modePageSlice.reducer