import React from "react";

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


export const GETPerson =
    (counter: number,
     setLoading: React.Dispatch<React.SetStateAction<boolean>>,
     setGetError: React.Dispatch<React.SetStateAction<string | null>>,
     setPerson: React.Dispatch<React.SetStateAction<TypesPerson>>,
     star_wars_data: TypesStarWars[] | [],
     setStarWarsData: React.Dispatch<React.SetStateAction<TypesStarWars[] | []>>
    ): void => {

        const URL_first = `https://swapi.dev/api/people/${counter}/`
        const URL_second = `https://swapi.py4e.com/api/peopl/${counter}/`

        setLoading(true)
        setGetError(null)

        fetch(URL_second)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw Error('brak dostępu do zasobu')
            })
            .then(data => {
                    setPerson({
                        name: data.name,
                        age: data.birth_year,
                        eyeColor: data.eye_color
                    })
                    setStarWarsData([...star_wars_data,
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
    }




