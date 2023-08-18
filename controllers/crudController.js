//Import model component

const CrudModel = require("../models/crudModel")


const addDataCrud = async (req, res) => {
   
    const data = req.body;
    console.log(data)

    try {
        //Añadir data al modelo crud
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
        res.status(404).json({ messsage: "Algo salió mal" });
    }
}

const getDataCrud = async (req, res) => {
    try {
        console.log("getDataCrud")
        const data = "prueba"
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(404).json({ messsage: "Algo salió mal" });
    }
}

exports.addDataCrud = addDataCrud
exports.getDataCrud = getDataCrud