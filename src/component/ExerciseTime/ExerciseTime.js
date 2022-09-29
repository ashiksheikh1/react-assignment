// import React, { useState } from 'react';

import { useState } from "react";
import './ExerciseTime.css'
const ExerciseTime = ({ cart }) => {
    const [time, setTime] = useState([])
    let total = 0;
    for (const pd of cart) {
        total = total + parseFloat(pd.timerequried)
    }

    const breakTime = (time) => {
        setTime(time)
    }
    return (
        <div>
            <h4>Add A Break</h4>
            <div className='Break-btn'>
                <button onClick={() => breakTime(10)}>10</button>
                <button onClick={() => breakTime(20)}>20</button>
                <button onClick={() => breakTime(30)}>30</button>
                <button onClick={() => breakTime(40)}>40</button>
            </div>
            <div className="Exercise">
                <h4>Exercise Details:{total}s</h4>
            </div>

            <div className="Exercise">
                <h4>Break time:{time}s</h4>
            </div>
        </div>
    );
};

export default ExerciseTime;