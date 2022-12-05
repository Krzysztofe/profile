import React, {useContext, useEffect, useState} from 'react';
import {GETPerson} from '../library/fetchGET'
import {FaCheckCircle} from 'react-icons/fa';
import {RiUserStarFill} from 'react-icons/ri'
import {GlobalContext} from "../contextAPI/globalContextProv";

const Main = () => {

    const [person, setPerson] = useState({name: '', age: '', eyeColor: ''}
    )

    const [counter, setCounter] = useState(1)
    const [getError, setGetError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const {starWarsData, setStarWarsData} = useContext(GlobalContext)


    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
    }

    useEffect(() => {
        GETPerson(counter, setLoading, setGetError,
            setPerson, starWarsData, setStarWarsData)
    }, [counter])

    const personValuesChecked = Object.values(person).every(item => item === '')


    let content = <>
        <div className="main_nameContainer">
            <h2 className='main__h2'>no data</h2>
            <RiUserStarFill className='userIcon'/>
            <FaCheckCircle className='checkedIcon'/>
        </div>
        <h3 className='main__h3'>age: </h3>
        <h3 className='main__h3'>eye color: </h3>
    </>

// Hook person === false means hook person contain API Values

    if (!personValuesChecked) {
        content =
            <>
                <div className="main_nameContainer">
                    <h2 className='main__h2'>{person.name}</h2>
                    <RiUserStarFill className='userIcon'/>
                    <FaCheckCircle className='checkedIcon'/>
                </div>
                <h3 className='main__h3'>age: {person.age === 'unknown' ? 'unknown' : 2022 - Number(person.age.slice(0, -3))}</h3>
                <h3 className='main__h3'>eye color: {person.eyeColor}</h3>
            </>
    }

    if (getError) {
        content = <>
            <div className="main_nameContainer">
                <h2 className='main__h2'>{getError}</h2>
                <RiUserStarFill className='userIcon'/>
                <FaCheckCircle className='checkedIcon'/>
            </div>
            <h3 className='main__h3'>age:</h3>
            <h3 className='main__h3'>eye color:</h3>
        </>
    }

    if (loading && !getError) {
        content = <>
            <div className="main_nameContainer">
                <h2 className='main__h2'>Loading...</h2>
                <RiUserStarFill className='userIcon'/>
                <FaCheckCircle className='checkedIcon'/>
            </div>
            <h3 className='main__h3'>age: </h3>
            <h3 className='main__h3'>eye color:</h3>
        </>
    }


    return (
        <main>
            <div className="wrapper">
                <div className="main__container">
                   <img className="main__image"
                         src='https://i.picsum.photos/id/104/534/383.jpg?hmac=LWCf2xo0z9EpP42nzR8xtJAr5TImrulfd1BaY-jvdl0'
                         alt="person image"/>
                    {content}
                </div>
                <button className='main__button'
                        onClick={handleIncrease}>
                    next profiles
                </button>
            </div>
        </main>
    );
};

export default Main;