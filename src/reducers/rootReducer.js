const initState = {
    showMenu: "hide"
}

const rootReducer = (state = initState, action) => {
    console.log("action====>", action);
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    return state;
}


export default rootReducer;


