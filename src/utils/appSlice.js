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
    },
})

export const  { toggleMenu } = appSlice.actions
export default appSlice.reducer
