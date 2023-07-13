

function Card (props){
    const {name, image, temperaments,weightMax, weightMin} = props



    return(
        <div>
            <h2>breed: {name}</h2>
            <img src={image} alt={name}/>
            <p>{temperaments}</p>
            <p>Weight: {weightMin} - {weightMax} kg</p>
        </div>
    )
}



export default Card