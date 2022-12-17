import {useEffect, useState} from "react";


const useFetchGET = (url: any) => {
    const [data, setData] = useState<any | null>(null)
    const [loadingGET, setLoadingGET] = useState(false)
    const [errorGET, setErrorGET] = useState<string | null>(null)

    useEffect(() => {

        setLoadingGET(true)
        setErrorGET(null)

        fetch(url)
            .then(resp => {
                    if (resp.ok) {
                        return resp.json()
                    }
                    throw Error('Brak dostępu do zasobu')
                }
            )
            .then(data => {
                    setData(data)
                    setLoadingGET(false)
                }
            )
            .catch(err => {
                    setErrorGET(err.message === 'Failed to fetch' ?
                        'Brak połączenia z serwerem' :
                        err.message)
                    setLoadingGET(false)
                    setData(null)
                }
            )
    }, [url])

    return {loadingGET, errorGET, data}

}

export default useFetchGET