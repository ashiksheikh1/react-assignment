import './Data.css'
const Data = (props) => {
    const { img, name, details, age, timerequried } = props.pd
    return (
        <div className='Data'>

            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Details: {details}</p>
            <p>Age: {age}</p>
            <p>Timerequried: {timerequried}s</p>
            <button onClick={() => props.addHandler(props.pd)} className='add-btn'>Add to list</button>
        </div>
    );
};

export default Data;