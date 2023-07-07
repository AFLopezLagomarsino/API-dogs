const axios = require ("axios")
const {Temperaments} = require ("../../db")
getTemps = async () => {
    const allTemperamentos = await Temperaments.findAll()
    const allTemperamentosNames = allTemperamentos.map(el=>el.name)

    if(!allTemperamentos.length){
        const dogs = await axios.get("http://api.thedogapi.com/v1/breeds")
        const temps = await dogs.data.map((dogo) => {
            return {
                temperaments: dogo.temperament
            }
        })
         const arrayTemps = temps.map((temp) => temp.temperaments).join(", ").split(", ")
         let temperamentos = []
        //se procede a eliminar y pushear todos los temperamentos al array "temperamentos"
         const temper = arrayTemps.forEach(element => {
            if(!temperamentos.includes(element)){
                temperamentos.push(element)
            }
        });
        //un elemento del array era un espacio vacio, por lo que procedo a eliminarlo
        temperamentos.sort()
        temperamentos.shift()
    
        await temperamentos.map((tem)=>{
            Temperaments.findOrCreate({
                where:{name:tem},
                defaults:{name: tem}
            })
        })
        return allTemperamentos
    }
    
    return allTemperamentosNames
}


module.exports = getTemps