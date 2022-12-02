import React, {ChangeEvent, FormEvent, useState} from 'react';
import InputText from "./InputText";
import InputCheckbox from "./InputCheckbox";
import {formValidation} from "../library/formValidation";


const Form = () => {
    const [inputsValues, setInputsValues] = useState({
        login: '', password: '', email: '', phone: '', checkbox: false
    })
    const [errors, setErrors] = useState({
        email: "", phone: "", checkbox: ""
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.type === "checkbox"
            ?
            e.target.checked
            :
            e.target.value
        setInputsValues(
            {
                ...inputsValues,
                [e.target.name]: value
            })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setErrors(formValidation(inputsValues))

        if (formValidation(inputsValues).email !== ""||
            formValidation(inputsValues).phone !== ""||
            formValidation(inputsValues).checkbox !== "") {
            return
        }

        setInputsValues({
            login: '', password: '', email: '', phone: '', checkbox: false
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <InputText label="login"
                       type='text'
                       name='login'
                       value={inputsValues.login}
                       handleChange={handleChange}/>

            <InputText label="hasło"
                       type='password'
                       name='password'
                       value={inputsValues.password}
                       handleChange={handleChange}/>

            <InputText label="email"
                       type='email'
                       name='email'
                       value={inputsValues.email}
                       handleChange={handleChange}/>
            <p>{errors.email}</p>

            <InputText label="numer telefonu"
                       type='text'
                       name='phone'
                       value={inputsValues.phone}
                       handleChange={handleChange}/>
            <p>{errors.phone}</p>

            <InputCheckbox value={inputsValues.checkbox}
                           handleChange={handleChange}/>
            <p>{errors.checkbox}</p>

            <button>zapisz</button>

        </form>
    );
};

export default Form;