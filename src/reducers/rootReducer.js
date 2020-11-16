const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: "hide",
    showSearch: "hide",
    showSettings:"hide",
    showSign: "hide"
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
    return state;
}

export default rootReducer;
