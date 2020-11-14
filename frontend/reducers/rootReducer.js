const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    register: "",
    SignIn: ""
}

const rootReducer = (state = initState, action) => {
    // console.log("action====>", action);
    if (action.type === "Show_REGISTER"){
        return {
            ...state,
            register: action.register
        }
    }
    else if (action.type === "Show_SignIn") {
        return {
            ...state,
            SignIn: action.SignIn
        }
    }
    return state;
}


export default rootReducer;