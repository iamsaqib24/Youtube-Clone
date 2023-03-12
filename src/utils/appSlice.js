import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: "app",
    initialState: {
        isHamOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isHamOpen = !state.isHamOpen
        },
        closeMenu: (state) => {
            state.isHamOpen = false
        }
    },
})

export const  { toggleMenu, closeMenu } = appSlice.actions
export default appSlice.reducer
