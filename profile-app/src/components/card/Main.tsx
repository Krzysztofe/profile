import React, {useState} from 'react';
import useGETFetch from '../library/fetchGET'
import {FaCheckCircle} from 'react-icons/fa';
import {RiUserStarFill} from 'react-icons/ri'
import Button from "../Button";


const Main = () => {

    const [counter, setCounter] = useState(1)

    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
    }

    const {loading, getError, dataObject: person } = useGETFetch (`https://swapi.py4e.com/api/people/${counter}/`)

    let content = <>
        <div className="main_nameContainer">
            <h2 className='main__h2'>no data</h2>
            <RiUserStarFill className='userIcon'/>
            <FaCheckCircle className='checkedIcon'/>
        </div>
        <h3 className='main__h3'>age: </h3>
        <h3 className='main__h3'>eye color: </h3>
    </>


    if (person) {
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

    if (loading) {
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

                <Button className='main__button'
                        text='next profiles'
                        onClick={handleIncrease}/>

            </div>
        </main>
    );
};

export default Main;