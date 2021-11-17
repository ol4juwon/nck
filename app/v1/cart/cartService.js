"use strict"

const cart = require('./cartModel')

exports.addToCart = async (payload) => {
    const {
        products,
        userId

    } = payload;
    //check if cart exists for user and add cart item
    const cartExist = await cart.findOne({ userId }).catch();
    console.log("pr exists", cartExist)
    if(cartExist) {
        const product  = await cartExist.findOneAndUpdate({userId}, { $inc :{"currentStock":quantity}}, {new : true})
        return {data: product};
    }
    const addProduct = await product.save();
    console.log("Done ",addProduct);
    const { error } = addProduct;
    if (error) return { error: error };
    return { data: addProduct };
};