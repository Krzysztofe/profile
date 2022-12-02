interface InputsValues {
    login: string
    email: string,
    phone: string,
    password: string,
    checkbox: boolean
}

export const formValidation = (inputsValues: InputsValues) => {
    const _errors = {email: "", phone: "", checkbox: ""}

    if (!inputsValues.email.includes('@')) {
        _errors.email = 'nieprawidłowy format adresu e-mail'
    }
    if (inputsValues.phone.length < 9) {
        _errors.phone = 'nieprawidłowy numer telefonu'
    }
    if (!inputsValues.checkbox) {
        _errors.checkbox = 'wymagana akceptacja regulaminu'
    }

    return _errors
}