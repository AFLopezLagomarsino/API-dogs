const{ Router } = require ("express")
const getAllTemperaments = require ("../handlers/temperamentHandler")
const temperaments = Router()

temperaments.get ("/", getAllTemperaments )

module.exports = temperaments