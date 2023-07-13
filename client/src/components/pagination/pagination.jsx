function Paginado ({dogsPerPage, allDogs, paginado}){

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++){
        pageNumbers.push(i) 
    }

    return (
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number => {
                    return (
                        <li className="number" key={number}>
                            <button onClick={()=>paginado(number)}>{number}</button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Paginado