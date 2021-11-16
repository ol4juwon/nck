exports.addToCart = async (payload) => {
    const {
        productName,
        price,
        quantity,
        category

    } = payload;

    const addProduct = await product.save();
    console.log("Done ",addProduct);
    const { error } = addProduct;
    if (error) return { error: error };
    return { data: addProduct };
};