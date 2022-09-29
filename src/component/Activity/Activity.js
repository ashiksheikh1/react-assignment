import React, { useEffect, useState } from 'react';
import { MdSportsCricket } from 'react-icons/md';
import Data from '../Data/Data';
import ExerciseTime from '../ExerciseTime/ExerciseTime';
import './Activity.css'
const Activity = () => {
    const [active, setActive] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActive(data))
    }, [])
    const addHandler = (pd) => {
        const newCart = [...cart, pd]
        setCart(newCart)

    }
    return (
        <div className='players'>
            <h2> <MdSportsCricket />Players activity</h2>
            <h3>Select today players activity</h3>
            <div className='active-mani'>

                <div className='active'>

                    {
                        active.map(pd => <Data addHandler={addHandler} pd={pd} key={pd.id} ></Data>)
                    }

                </div>
                <div className='cart'>
                    <h2>cart:{active.length}</h2>
                    <img src="" alt="" />
                    <h2>Ashik Ahmed</h2>
                    <p>Digholia Khulna</p>
                    <div className='personal-data'>
                        {/* <p>Height: 5.5in</p> */}
                        <p>Weight: 64 kg</p>
                        <p>Age: 25 years</p>
                    </div>
                    <ExerciseTime cart={cart}></ExerciseTime>
                    <button className='Activity-btn'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;