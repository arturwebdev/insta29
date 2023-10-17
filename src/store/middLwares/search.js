const ignoreSpaces = () => (next) => (action) => {
    if (action.type === 'search/toggleSearch') {
        action.payload = action.payload.replaceAll(' ', '')
    }
    next(action)
}


const lowerRegistr = () => (next) => (action) =>{
    if (action.type === 'search/toggleSearch') {
        action.payload = action.payload.toLowerCase()
    }
    next(action)
}

export default function getSearchMiddLwares() {
    return [
        ignoreSpaces,
        lowerRegistr
    ]
}