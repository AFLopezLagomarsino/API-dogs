

function Card (props){
    const {name, image, temperaments,weightMax, weightMin} = props



    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{temperaments}</p>
            <p>Weight: {weightMin} - {weightMax}</p>
        </div>
    )
}



export default Card