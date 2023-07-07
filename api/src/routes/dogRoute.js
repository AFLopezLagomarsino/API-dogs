const { Router } = require("express")
const {getAllDogs, getDogsById, postDog} = require ("../handlers/dogHandler")

const dog = Router()

dog.get("/", getAllDogs)

dog.get("/:id", getDogsById)

dog.post("/",postDog)

module.exports = dog