const initState = {
    showMenu: "hide"
}

const rootReducer = (state = initState, action) => {
    if (action.type === "Show_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    return state;
}

export default rootReducer;
