"use strict"
const mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');


const schema = mongoose.Schema({
        productName: { type: String, required:true},
        currentStock: { type: Number,required:true},
        sold: { type: Number},
        price: {type:Number, required:true},
        category:{type: String, required:  true},
    },{
        toJSON :{
            transform: (doc, ret) => {
                ret.productId = ret._id;
                delete ret.__v;
                delete ret._id;
            }
        },
        timestamps: true}

)

schema.post('save', function(products){
    console.log("Post save ", products);
})

schema.index({"$**": "text"});
schema.plugin(mongoosePaginate)
module.exports = mongoose.model('products',schema);