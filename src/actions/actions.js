export const Register = (x) => {
    return {
        type: 'Show_REGISTER',
        test: { username: 'Yasir', password: "456"},
        register: x,
    }
}
export const SignIn = (y) => {
    return {
        type: 'Show_SignIn',
        test: { username: 'Yasir', password: "456"},
        SignIn: y
    }
}