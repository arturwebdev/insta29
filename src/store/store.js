import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "./slices/posts/postsSlices"
import { searchReducer } from "./slices/search/searchSlice"
import getSearchMiddLwares from "./middLwares/search"
import { usersReducer } from "./slices/users/usersSlice"
import { messagesReducer } from "./slices/messages/messagesSlice"
import getPostsMiddLwares from "./middLwares/posts"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    posts: postsReducer,
    search: searchReducer,
    users: usersReducer,
    messages: messagesReducer
})

const persistConfig = {
    key: 'insta29',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddLwares) => [
        ...getDefaultMiddLwares({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        ...getSearchMiddLwares(),
        ...getPostsMiddLwares()
    ]
})

export const persistor = persistStore(store)

export default store
