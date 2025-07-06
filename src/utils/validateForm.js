export const validateForm = (email, password, password2 = null) => {
    const isValidEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}/.test(password);
    const isValidPassword2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}/.test(password2);
    
    if (!isValidEmail) {
        return 'Please enter a valid email'
    }
    else if (!isValidPassword) {
        return 'Please enter a valid password'
    }
    else if (password2 &&!isValidPassword2) {
        return 'Password and confirm password does not match'
    }
    else {
        return null;
    }
}