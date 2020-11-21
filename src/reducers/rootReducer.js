// Creates the Redux variables
const initState = {
    test: [
        { username: "ahamd", password: "123" }
    ],
    showMenu: 0,
    showSign: 0,
    showSearch: 0,
    showSettings: 0,
    gameIndex: -1,
    Games: [],
    GamesSearch: [],
    user: {},
    colors: ["#ec5fdc","#63017e","#63017e","#1e51c8","#ffff00","#000000","#ffffff","#000000"],
    refreshApp: ()=>{}
}

// Edits the Redux variables
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
    if (action.type === "SEARCH_GAMES") {
        return  {
            ...state,
            GamesSearch: action.GamesSearch
        }
    }
    if (action.type === "GAME_INDEX") {
        return  {
            ...state,
            gameIndex: action.gameIndex
        }
    }
    if (action.type === "USER_INFO") {
        return  {
            ...state,
            user: action.user
        }
    }
    if (action.type === "GET_COLORS") {
        return  {
            ...state,
            colors: action.colors
        }
    }
    if (action.type === "REFRESH_APP") {
        return  {
            ...state,
            refreshApp: action.refreshApp
        }
    }
    return state;
}

export default rootReducer;
