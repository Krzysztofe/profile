import React, {useContext, useEffect, useState} from "react";
import {GlobalContext, StarWarsData} from "../contextAPI/globalContextProv";

interface Data {
    login: string,
    password: string,
    email: string,
    phone: string,
    checkbox: boolean
}


const usePOSTFetch = (URL_POST: string, data: Data) => {

    const [fetchErrors, setFetchErrors] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const {starWarsData} = useContext(GlobalContext)


    const createPOST = () => {

        setLoading(true)
        setFetchErrors(null)

        fetch(URL_POST,
            {
                method: 'POST',
                body: JSON.stringify({...data, starWarsData}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => {
                if (!resp.ok) {
                    throw Error('Nie znaleziono metody zapisu')
                }
                return resp.json()
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

    return {fetchErrors, loading, createPOST}
}


export default usePOSTFetch
