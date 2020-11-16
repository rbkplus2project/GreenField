const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: "hide",
    Games: [],
    GameIndex: -1
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
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
        }
    }
    return state;
}

export default rootReducer;
