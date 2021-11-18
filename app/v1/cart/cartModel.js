"use strict"
const mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');

const productSchema = mongoose.Schema({
    productName: { type: String, required: true},
    quantity:{ type: Number,required: true},
},{
    toJSON :{
        transform: (doc, ret) => {
            ret.itemId = ret._id;
            delete ret.__v;
            delete ret._id;
}
    }
})
const schema = mongoose.Schema({
        cartItems: { type: [{productName: String, quantity: Number}], required: true},
    userId: {type: String, required : true}
    },{
        toJSON :{
            transform: (doc, ret) => {
                ret.cartId = ret._id;
                delete ret.__v;
                delete ret._id;
            }
        },
        timestamps: true}

)

schema.post('save', function(carts){
    console.log("Post save ", carts);
})

schema.index({"$**": "text"});
schema.plugin(mongoosePaginate)
module.exports = mongoose.model('carts',schema);