const{Dog, Temperaments } = require("../../db")
 
 const createDog = async (name, image, weightMin, weightMax, heightMin, heightMax, lifeSpan, temperaments) =>{
    
    if(!name && !image && !weightMin && weightMax && !heightMin && !heightMax && !lifeSpan && !temperaments){
        return res.status(400).send("Falta datos :P")

    }else{
        let newDog = await Dog.create({name, image, weightMin, weightMax, heightMin, heightMax, lifeSpan})
        const tempDB = await Temperaments.findAll({where :{name: temperaments}})
        await newDog.addTemperaments(tempDB)
        
        newDog = await Dog.findByPk(newDog.id, {
            include:
            {model:Temperaments,attributes: ["name"],
            through:{
                attributes:[]
            }}})
        
        return newDog
    }
 }

 module.exports = createDog