"use strict"
const mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');


const schema = mongoose.Schema({
        productName: { type: String, required:true},
        currentStock: { type: Number,required:true},
        sold: { type: Number, required: true},
        price: {type:Number, required:true},
        category:{type: String, required:  true},
    },{
        toJSON :{
            transform: (doc, ret) => {
                ret.inventoryId = ret._id;
                delete ret.__v;
                delete ret._id;
            }
        },
        timestamps: true}

)

schema.post('save', function(portfolio){
    console.log("Post save ", portfolio);
})

schema.index({"$**": "text"});
schema.plugin(mongoosePaginate)
module.exports = mongoose.model('portfolio',schema);