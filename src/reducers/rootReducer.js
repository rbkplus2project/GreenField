const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: "hide",
    showSearch: "hide"
}

const rootReducer = (state = initState, action) => {
    console.log("action====>", action);
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
    return state;
}

export default rootReducer;
