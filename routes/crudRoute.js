//import express
const express = require("express");
//Router: Used for add more pages to or aplication
const router = express.Router();


const {
    addDataCrud,
    getDataCrud,
} = require("../controllers/crudController");


router.get("/", getDataCrud);
router.post("/", addDataCrud);

module.exports = router;