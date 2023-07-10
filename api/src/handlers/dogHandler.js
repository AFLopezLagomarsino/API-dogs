const {dogByBreed,totalDogs} = require ("../controllers/dogs/dogController")
const { dogIdByBd, dogIdByAPI } = require ("../controllers/dogs/dogIdController")
const createDog = require("../controllers/dogs/createDog")

const getAllDogs = async (req,res) =>{
   const {name} = req.query
    try {
    if(name){
        const dog = await dogByBreed(name)
        return res.status(200).json(dog)
    }
    if(!name){
        const dogs = await totalDogs()
        return res.status(200).json(dogs)
    }

   } catch (error) {
    return res.status(400).send({error:error.message})
   } 
}

const getDogsById = async (req,res) =>{
   const {id} = req.params
    try {
        if(isNaN(id)) {
            const bd = await dogIdByBd(id)
            return res.status(200).json(bd)
        } else{
            const api = await dogIdByAPI(id)
            return res.status(200).json(api)
        }
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}

const postDog = async (req,res) =>{   
    const {name, image, weightMin, weightMax, heightMin, heightMax, lifeSpan, temperaments } = req.body 

    try {
            const dogo = await createDog(name, image, weightMin, weightMax, heightMin, heightMax, lifeSpan, temperaments)
            return res.status(200).json(dogo)
        
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports = {
    getAllDogs,
    getDogsById,
    postDog
}