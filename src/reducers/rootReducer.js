const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: "hide",
    showsetting:"hide"

}

const rootReducer = (state = initState, action) => {
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    else if (action.type === "SHOW_setting") {
        return {
            ...state,
            showsetting: action.showsetting
        }
    }
    return state;
}

export default rootReducer;
