exports.handleErrors = function (err) {
    console.log(err.message, err.code);
    let errors = { username: '', email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect username') {
        errors.username = 'That user is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    // duplicate email error
    if (err.code === 11000) {
        if (err.keyValue.email) {
            errors.email = 'that email is already registered';
            return errors;

        }
        else {
            errors.username = 'that user is already registered';
            return errors;
        }
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}
