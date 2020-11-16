const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: "hide"
}

const rootReducer = (state = initState, action) => {
    // console.log("action====>", action);
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    return state;
}

export default rootReducer;
