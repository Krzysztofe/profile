import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../contextAPI/globalContextProv";

interface TypesPerson {
    name: string,
    age: string,
    eyeColor: string
}

interface TypesStarWars {
    name: string,
    created: string,
    vehicles: string []
}


export const useGETFetch = (url: string) => {
    const [loading, setLoading] = useState(true)
    const [getError, setGetError] = useState<string | null>(null)
    const [dataObject, setDataObject] = useState<any>(null)
    const {starWarsData, setStarWarsData} = useContext(GlobalContext)

    useEffect(() => {
        setLoading(true)
        setGetError(null)

        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw Error('brak dostępu do zasobu')
                }
                return resp.json()
            })
            .then(data => {
                setDataObject({
                        name: data.name,
                        age: data.birth_year,
                        eyeColor: data.eye_color
                    })
                    setStarWarsData([...starWarsData,
                        {
                            name: data.name,
                            created: data.created,
                            vehicles: data.vehicles
                        }])
                    setLoading(false)
                }
            )
            .catch(err => {
                    setGetError(err.message === 'Failed to fetch'
                        ?
                        'Brak połączenia z serwerem'
                        :
                        err.message)
                    setLoading(false)
                }
            )

    }, [url])

    return {loading, getError, dataObject}
}

export default useGETFetch



