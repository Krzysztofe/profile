import React, {useEffect, useState} from 'react';
import {getPerson} from '../library/fetchGET'


const Main = () => {

    const [person, setPerson] = useState(
        {name: '', age: '', eyeColor: ''}
    )

    const [starWarsData, setStarWarsData] = useState<[] | { name: '', created: '', vehicles: string [] }[]>(
        []
    )
    const [counter, setCounter] = useState(0)
    const [getError, setGetError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)


    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
    }

    useEffect(() => {
        getPerson(counter, setLoading, setGetError,
            setPerson, starWarsData, setStarWarsData)
    }, [counter])


    const personValuesChecked = Object.values(person).every(item => item === '')


    let content = <>
        <h2>no data</h2>
        <h3>age: no data </h3>
        <h3>eye color: no data</h3>
    </>

// const person === false, const Person contain API Values

    if (!personValuesChecked) {
        content =
            <>
                <h2>{person.name}</h2>
                <h3>age: {person.age === 'unknown' ? 'unknown' : 200 - Number(person.age.slice(0, -3))}</h3>
                <h3>eye color: {person.eyeColor}</h3>
            </>
    }

    if (getError) {
        content = <>
            <h2>{getError}</h2>
            <h3>age: {getError}</h3>
            <h3>eye color: {getError}</h3>
        </>
    }
    if (loading && !getError) {
        content = <>
            <h2>loading</h2>
            <h3>age: loading... </h3>
            <h3>eye color: loading...</h3>
        </>
    }


    return (
        <main>
            <img src='https://i.picsum.photos/id/104/534/383.jpg?hmac=LWCf2xo0z9EpP42nzR8xtJAr5TImrulfd1BaY-jvdl0'/>
            {content}
            <button onClick={handleIncrease}>next</button>
        </main>
    );
};

export default Main;