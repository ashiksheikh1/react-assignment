import './Data.css'
const Data = (props) => {
    const { img, name, details, age, timerequried } = props.pd
    return (
        <div className='Data'>

            <img src={img} alt="" />
            <h2>name:{name}</h2>
            <p>details:{details}</p>
            <p>age:{age}</p>
            <p>timerequried:{timerequried}s</p>
            <button onClick={() => props.addHandler(props.pd)} className='add-btn'>add to list</button>
        </div>
    );
};

export default Data;