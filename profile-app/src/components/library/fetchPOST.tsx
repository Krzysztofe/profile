import React from "react";

interface InputsValues {
    login: string,
    password: string,
    email: string,
    phone: string,
    checkbox: boolean
}

export const postUser = (inputsValues: InputsValues,
                         setFetchErrors: React.Dispatch<React.SetStateAction<string | null>>,
                         setLoading: React.Dispatch<React.SetStateAction<boolean>>,
                         ): void => {


    const URL_POST = 'https://swapi.dev/api/people/1/'

    setFetchErrors(null)
    setLoading(true)

    fetch(URL_POST,
        {
            method: 'POST',
            body: JSON.stringify({inputsValues}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            throw Error('Nie znaleziono metody zapisu')
        })
        .then(data => {
            if (data) {
                setFetchErrors('Informacje zostały wysłane')
                setLoading(false)
            }
        })
        .catch(err => {
                setFetchErrors(err.message === 'Failed to fetch' ?
                    'Brak połączenia z serwerem' :
                    err.message)
                setLoading(false)
            }
        )
}

