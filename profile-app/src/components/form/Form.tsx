import React, {ChangeEvent, FormEvent, useContext, useState, useEffect} from 'react';
import InputText from "./formInputs/InputText";
import InputCheckbox from "./formInputs/InputCheckbox";
import {formValidation} from "../library/formValidation";
import usePOSTFetch from "../library/fetchPOST";
import Button from "../Button";


const Form = () => {

    const [inputsValues, setInputsValues] = useState({
        login: '', password: '', email: '', phone: '', checkbox: false
    })
    const [errors, setErrors] = useState({
        email: "", phone: "", checkbox: ""
    })
    const [postInfoPrint, setPostInfoPrint] = useState(false)
    const [buttonClick, setButtonClick] = useState(true)


    const {fetchErrors, loading, createPOST} =
        usePOSTFetch('https://swapi.dev/api/people/1/', inputsValues)

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
        createPOST()
        setInputsValues({
            login: '', password: '', email: '', phone: '', checkbox: false
        })
        setPostInfoPrint(true)
        setButtonClick(prevState => !prevState)
    }

    return (

            <form onSubmit={handleSubmit}
                  className="wrapper wrapper--form">
                <InputText label="login"
                           type='text'
                           name='login'
                           value={inputsValues.login}
                           handleChange={handleChange}/>
                <p className='inputError'></p>

                <InputText label="has??o"
                           type='password'
                           name='password'
                           value={inputsValues.password}
                           handleChange={handleChange}/>
                <p className='inputError'></p>

                <InputText label="e-mail"
                           type='email'
                           name='email'
                           value={inputsValues.email}
                           handleChange={handleChange}/>
                <p className='inputError'>{errors.email}</p>

                <InputText label="numer telefonu"
                           type='number'
                           name='phone'
                           value={inputsValues.phone}
                           handleChange={handleChange}/>
                <p className='inputError'>{errors.phone}</p>

                <InputCheckbox value={inputsValues.checkbox}
                               handleChange={handleChange}/>
                {errors ? <p className='inputError'>{errors.checkbox}</p> : null}

                <Button className='button'
                        text='zapisz'/>

                {loading ? <p className='inputError inputError--underButton'>wysy??ka</p> : null}
                {postInfoPrint ? <p className='inputError inputError--underButton'>{fetchErrors}</p> : null}
            </form>
    );
};

export default Form;