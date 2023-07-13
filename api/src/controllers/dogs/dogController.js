const axios = require ("axios")
const {Dog, Temperaments} = require ("../../db")
const allDogs = async () => {
    const all = await axios.get(`http://api.thedogapi.com/v1/breeds`)
    const dogos = await all.data.map((dogs) => {
        return {
            id: dogs.id,
            name: dogs.name,
            temperaments: dogs.temperament,
            lifespan: dogs.life_span,
            weightMin: dogs.weight.metric.split(" - ")[0],
            weightMax: dogs.weight.metric.split(" - ")[1],
            heightMin: dogs.height.metric.split(" - ")[0],
            heightMax: dogs.height.metric.split(" - ")[1],
            image: dogs.image.url,
        }
    })
    return dogos
}

const allDogsBd = async ()=>{
    return await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
}

const totalDogs = async() =>{
    const allApi = await allDogs()
    const allDb = await allDogsBd()
    const total = allDb.concat(allApi)
    return total
}

const dogByBreed = async (name) => {
    const byName = await totalDogs()
    const breed = await byName.filter((dog)=> dog.name.toLowerCase().includes(name.toLowerCase()))
    if (breed.length === 0){
        return "No existe esa raza de perro :P"
    }
    return breed
}

module.exports = {
    allDogs,
    dogByBreed,
    totalDogs
}