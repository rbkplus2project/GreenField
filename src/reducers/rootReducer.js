const initState = {
<<<<<<< HEAD
||||||| 24b9a48
    test: [
        { username: "ahamd", password: "123"}
    ],
    SignUp: "hide",
    SignIn: "hide",
=======
    test: [
        { username: "ahamd", password: "123"}
    ],
>>>>>>> 48d4a57e1adcc25396ba240c9b95bcdf076f421d
    showMenu: "hide"
}

const rootReducer = (state = initState, action) => {
<<<<<<< HEAD
    console.log("action====>", action);
    if (action.type === "SHOW_MENU") {
||||||| 24b9a48
    console.log("action====>", action);
    if (action.type === "Show_SignUp"){
        return {
            ...state,
            SignUp: action.SignUp
        }
    }
    else if (action.type === "Show_SignIn") {
        return {
            ...state,
            SignIn: action.SignIn
        }
    }
    else if (action.type === "Show_MENU") {
=======
    if (action.type === "SHOW_MENU") {
>>>>>>> 48d4a57e1adcc25396ba240c9b95bcdf076f421d
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    return state;
}

export default rootReducer;
