
const addPost = (store) => (next) => (action) => {
    if (action.type === 'addPost') {
        const user = store.getState().users.currentUser
        const newPost = {
            id: new Date().getTime() + '_' + user.id,
            img: action.payload.img,
            name: user.username,
            likesCount: Math.round(Math.random() * 800 + 700),
            postText: action.payload.aboutText,
            timeAgo: Math.round(Math.random() * 7 + 2) + ' Minutes Ago',
            comments: []
        }

        store.dispatch({type: 'posts/addPost', payload: newPost})
        store.dispatch({type: 'users/addPost', payload: newPost})
        return
    }
    next(action)
}

const delPost = (store) => (next) => (action) => {
    if (action.type === 'deletePost') {
        store.dispatch({type: 'posts/deletePost', payload: action.payload})
        store.dispatch({type: 'users/deletePost', payload: action.payload})
        return
    }

    next(action)
}

export default function getPostsMiddLwares() {
    return [
        addPost,
        delPost
    ]
}