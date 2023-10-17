import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";


const userSlice = createSlice({
    name: 'users',
    initialState: {
        currentUser: null,
        usersData: []
    },
    reducers: {
        logIn(state, {payload: {login, password}}){
            state.currentUser = state.usersData.find(user => 
                                                        (user.email === login || user.username === login) &&
                                                         user.password === password)
                                || null
        },
        logOut(state) {
            state.currentUser = null
        },
        addPost(state, {payload}){
            const userIdx = state.usersData.findIndex(user => user.id === state.currentUser.id)

            state.currentUser.posts.unshift(payload)
            state.usersData[userIdx].posts.unshift(payload)
        },
        deletePost(state, {payload}){
            const userIdx = state.usersData.findIndex(user => user.id === state.currentUser.id)

            state.currentUser.posts = state.currentUser.posts.filter(post => post.id !== payload)
            state.usersData[userIdx].posts = state.usersData[userIdx].posts.filter(post => post.id !== payload)

        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            state.usersData = payload
        }
    }
})

export const selectUsers = state => state.users

export const {logIn, logOut} = userSlice.actions

export const usersReducer = userSlice.reducer