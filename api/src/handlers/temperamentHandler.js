const getTemps = require("../controllers/temperament/temperamentController") 

const getAllTemperaments = async (req,res) =>{
try {
    
    const temps = await getTemps()
    return res.status(200).json(temps)

    
    } catch (error) {
    res.status(400).send({error:error.message})
    }
}

module.exports = getAllTemperaments