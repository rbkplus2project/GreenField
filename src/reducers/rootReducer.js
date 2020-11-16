const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: 0,
    showSign: 0,
    showSearch: 0,
    showSettings: 0,
    gameIndex: -1,
    Games: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    if (action.type === "SHOW_SEARCH") {
        return {
            ...state,
            showSearch: action.showSearch
        }
    }
    if (action.type === "SHOW_SIGN") {
        return {
            ...state,
            showSign: action.showSign
        }
    }
    if (action.type === "SHOW_SETTINGS") {
        return {
            ...state,
            showSettings: action.showSettings
        }
    }
    if (action.type === "GET_GAMES") {
        return  {
            ...state,
            Games: action.Games
        }
    }
    if (action.type === "GAME_INDEX") {
        return  {
            ...state,
            gameIndex: action.gameIndex
        }
    }
    return state;
}

export default rootReducer;
