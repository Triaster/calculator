import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface sidebarState {
    value: boolean
}

const initialState: sidebarState = {
    value: false,
}

export const sidebarSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = sidebarSlice.actions

export default sidebarSlice.reducer