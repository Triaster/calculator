import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface menuState {
    value: string
}

const initialState: menuState = {
    value: "calculator",
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        calculatorMode: (state) => {
            state.value = "calculator"
        },
        converterMode: (state) => {
            state.value = "converter"
        }
    },
})

// Action creators are generated for each case reducer function
export const { calculatorMode, converterMode } = menuSlice.actions

export default menuSlice.reducer