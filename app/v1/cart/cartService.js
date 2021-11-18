"use strict"

const cart = require('./cartModel')

exports.addToCart = async (payload) => {
    const {
        products,
        userid

    } = payload;
    //check if cart exists for user and add cart item
    const cartExist = await cart.findOne({ userId :userid}).catch();
    console.log("pr exists", cartExist)
    if(cartExist) {
        const product  = await cart.findOneAndUpdate({userId:userid}, { cartItems: products}, {new : true})
        return {data: product};
    }

    console.log(products)
    const addToCart = new cart({
        cartItems: products,
        userId: userid
    });
    const addProduct = await addToCart.save();
    console.log("Done ",addProduct);
    const { error } = addProduct;
    if (error) return { error: error };
    return { data: addProduct };
};