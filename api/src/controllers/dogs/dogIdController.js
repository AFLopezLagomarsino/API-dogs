const {Dog} = require ("../../db")
const {allDogs} = require ("../dogs/dogController")

const dogIdByBd = async (id) =>{
   return await Dog.findByPk(id)
}
const dogIdByAPI = async (id) =>{
 const dogs = await allDogs()
 const dogId = await dogs.find((dogo) => dogo.id === Number(id))
 if (dogId.length === 0){
  return "No existe un perrhijo con ese id"
 }
 return dogId
}

module.exports = {
    dogIdByBd,
    dogIdByAPI
}