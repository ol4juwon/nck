"use strict";
const inventory = require("./InventoryModel");


exports.getProducts = async ( payload ) => {

    const allProdcuts = await inventory.find();
const {error} = allProdcuts;
if(error) return{ error: error};
    return { data: {products : allProdcuts}};

}

exports.getSingleProduct = async (payload) => {
    console.log("Get 1 name", payload)

    const singleProduct = await inventory.findOne({productName : new RegExp(`^${payload}`,'i' )});
    console.log("Single Product", singleProduct);
    // const {error} = singleProduct;
    // if(error) return {error: error};
    return {data : {product: singleProduct}}
}

exports.deleteProduct = async (payload) => {

    console.log("Del name :",  payload);
const {name} = payload;
    const  deleteProduct = await inventory.deleteOne({productName : new RegExp(`^${name}`,'i' )})
const {error} = deleteProduct;
    if(error) return {error: error};
    return { data: deleteProduct}
}


exports.updateProduct = async ( payload ) => {
    const {productName, price, quantity} = payload
    const productExist  = await inventory.findOneAndUpdate({productName}, {price: price, currentStock: quantity},{ new : true}).catch((e) => {console.log(e)})
const {error} = productExist;
    if( error) return{error};
    return {data: productExist};
}

exports.addProduct = async (payload) => {
    const {
        productName,
        price,
        quantity,
        category

    } = payload;

    // check if product exists
    const productExist = await inventory.findOne({ productName }).catch();
    console.log("pr exists", productExist)
   if(productExist) {
       const product  = await inventory.findOneAndUpdate({productName}, { $inc :{"currentStock":quantity}}, {new : true})
        return {data: product};
   }

    const product = new inventory({
        productName: productName,
        category: category,
        price: price,
        currentStock: quantity
       });

    const addProduct = await product.save();
    console.log("Done ",addProduct);
    const { error } = addProduct;
    if (error) return { error: error };
    return { data: addProduct };
};
