const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: "hide",
<<<<<<< HEAD
    showSearch: "hide",
    showSettings:"hide",
    showSign: "hide"
=======
    Games: [],
    GameIndex: -1
>>>>>>> 6bc2273ecba40a0710a814e875afa4f854bf405f
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
<<<<<<< HEAD
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
=======
    if (action.type === "SHOW_GAMES") {
        return  {
            ...state,
            Games: action.Games
        }
    }
    if (action.type === "SAVE_GAME_INDEX") {
        return  {
            ...state,
            GameIndex: action.GameIndex
>>>>>>> 6bc2273ecba40a0710a814e875afa4f854bf405f
        }
    }
    return state;
}

export default rootReducer;
