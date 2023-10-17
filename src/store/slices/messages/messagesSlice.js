const { createSlice } = require("@reduxjs/toolkit");

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        allMessages: [],
        currentDialog: [],
        activeUserId: ''
    },
    reducers: {
        toggleActiveUser(state, {payload: {fromId, toId}}) {
            state.activeUserId = toId

            state.currentDialog = state.allMessages.filter(message => message.toId === toId && message.fromId === fromId || message.fromId === toId && message.toId === fromId)
        },
        addMessage(state, {payload}) {
            const message = {
                id: new Date().getTime().toString(),
                body: payload.body,
                toId: state.activeUserId,
                fromId: payload.fromId
            }
            state.allMessages.push(message)
            state.currentDialog.push(message)
        },
        resetMessages(state) {
            state.currentDialog = []
            state.activeUserId = ''
        }
    }
})


export const selectMessages = state => state.messages

export const { toggleActiveUser, addMessage, resetMessages } = messagesSlice.actions

export const messagesReducer = messagesSlice.reducer