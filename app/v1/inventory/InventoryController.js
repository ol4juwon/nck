"use strict";
const inventoryService = require("./InventoryService");


exports.getProducts = async (req, res) => {
    const {error, data} = await inventoryService.getProducts();
    if (error) createErrorResponse(res, error, 400);

    return createSuccessResponse(res, data, 200)
}
exports.getSingleProduct = async (req, res) => {
    const {name} = req.query
    const {error, data} = await inventoryService.getSingleProduct(name)
    if(error) return createErrorResponse(res, error, 400)

    return createSuccessResponse( res, data, 200)
}

exports.addProducts = async (req, res) => {
    const payload = req.body

    const {error, data} = await inventoryService.addProduct(payload);
    if (error) return createErrorResponse(res, error, 400);
    return createSuccessResponse(res, data, 200);
}
exports.updateProduct = async (req, res) => {
    const payload = req.body;

    const {error, data} = await inventoryService.updateProduct(payload);
    if (error) return createErrorResponse(res, error, 400);
    return createSuccessResponse(res, data, 200)
}

exports.deleteProduct = async (req, res) => {
    const payload = req.query
    const {error, data} =  await inventoryService.deleteProduct(payload);

    if(error) return createErrorResponse(res, error, 400);

    return createSuccessResponse(res, data, 200);
}