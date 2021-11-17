"use strict"
const router = require('express').Router();
const {validateUser} = require("../../app/Middleware")
const inventoryController = require("../../app/v1/inventory/InventoryController")
const inventoryValidator = require("../../app/v1/inventory/InventoryValidator")

router.post("/add",inventoryController.addProducts);
router.get("/",validateUser, inventoryController.getProducts);
router.get("/search", validateUser,inventoryController.getSingleProduct)
router.put("/update", inventoryController.updateProduct);
router.delete("/", inventoryController.deleteProduct);
module.exports = router