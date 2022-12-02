import React, {ChangeEvent, FormEvent, useState} from 'react';
import InputText from "./InputText";
import Button from "../Button";
import InputCheckbox from "./InputCheckbox";

const Form = () => {

    const [inputsValues, setInputsValues] = useState({
        login: '', password: '', email: '', phone: '', checkBox: false
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
        setInputsValues({
            login: '', password: '', email: '', phone: '', checkBox: false
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
            <InputText label="numer telefonu"
                       type='number'
                       name='phone'
                       value={inputsValues.phone}
                       handleChange={handleChange}/>

            <InputCheckbox value={inputsValues.checkBox}
                           handleChange={handleChange}/>

            <button>zapisz</button>
        </form>
    );
};

export default Form;