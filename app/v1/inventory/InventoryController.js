"use strict";
const inventoryService = require("./InventoryService");


exports.getProducts = async (req,res) => {
const allProducts = await inventoryService.getProducts();

return createSuccessResponse(res,allProducts,202)
}

exports.addProducts = async (req,res) => {
    const payload  = req.body

    const {error,data} = await inventoryService.addProduct(payload);
    if(error) return createErrorResponse(res,error,400);
    return createSuccessResponse(res,data, 200);
}
exports.updateProduct = async (req,res) => {
    const payload = req.body;

    const { error, data} = await inventoryService.updateProduct(payload);
    if(error) return createErrorResponse(res, error, 400);
    return  createSuccessResponse(res,data,200)
}