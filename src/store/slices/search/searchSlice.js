import { createSlice } from "@reduxjs/toolkit";


const searchSliche = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        toggleSearch(state, {payload}){
           return payload 
        },
        resetSearch(state, {payload}){
            return ''
        }
    }
})

export const selectSearch = state => state.search

export const {resetSearch, toggleSearch} = searchSliche.actions

export const searchReducer = searchSliche.reducer