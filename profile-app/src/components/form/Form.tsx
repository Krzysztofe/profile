import React, {ChangeEvent, FormEvent, useState, useEffect} from 'react';
import InputText from "./InputText";
import InputCheckbox from "./InputCheckbox";
import {formValidation} from "../library/formValidation";
import {postUser} from "../library/fetchPOST";


const Form = () => {
    const [inputsValues, setInputsValues] = useState({
        login: '', password: '', email: '', phone: '', checkbox: false
    })
    const [errors, setErrors] = useState({
        email: "", phone: "", checkbox: ""
    })
    const [loading, setLoading] = useState(false)
    const [fetchErrors, setFetchErrors] = useState<null | string>(null)
    const [postInfoPrint, setPostInfoPrint] = useState(false)
    const [buttonClick, setButtonClick] = useState(true)

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


    useEffect(() => {
        const timeId = setTimeout(() => {
            setPostInfoPrint(false)
        }, 4000)

        return () => {
            clearTimeout(timeId)
        }
    }, [buttonClick])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setErrors(formValidation(inputsValues))

        if (formValidation(inputsValues).email !== "" ||
            formValidation(inputsValues).phone !== "" ||
            formValidation(inputsValues).checkbox !== "") {
            return
        }

        postUser(inputsValues, setFetchErrors, setLoading)
        setInputsValues({
            login: '', password: '', email: '', phone: '', checkbox: false
        })
        setPostInfoPrint(true)
        setButtonClick(prevState => !prevState)
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
                       type='number'
                       name='phone'
                       value={inputsValues.phone}
                       handleChange={handleChange}/>
            <p>{errors.phone}</p>

            <InputCheckbox value={inputsValues.checkbox}
                           handleChange={handleChange}/>
            <p>{errors.checkbox}</p>

            {postInfoPrint ? <p>{fetchErrors}</p> : null}
            {loading ? <p>wysyłka</p> : null}
            <button>zapisz</button>

        </form>
    );
};

export default Form;