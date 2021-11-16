"use strict";
const cartService = require("./cartService");


exports.addToCart = async (req,res) => {
    const payload  = req.body

    const {error,data} = await cartService.addToCart(payload);
    if(error) return createErrorResponse(res,error,400);
    return createSuccessResponse(res,data, 200);
}