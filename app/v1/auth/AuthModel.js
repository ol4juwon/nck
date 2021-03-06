"use strict"
const mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');


const schema = mongoose.Schema({
    firstName: { type: String, required:true,min: 3,max:255},
    lastName: { type: String, required:true,min: 3,max:255},
    email: { type: String,required:true},
    password: { type: String, required:true,min: 8,max:64},
    phone: {type:String},
    date_added:{type: Date, default:Date.now},
    address: {type: String},
    token: {type:String},
    cart: {type: Object, default: 0}
}, {
    toJSON: {
        transform: (doc, ret) => {
            ret.userId = ret._id;
            delete ret.password;
            delete ret.__v;
            delete ret._id;
        }
    },
    timestamps: true
});

schema.post('save', function(user){
    console.log("Post save ", user);
})

schema.index({"$**": "text"});
schema.plugin(mongoosePaginate)
module.exports = mongoose.model('users',schema);