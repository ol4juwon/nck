"use strict"

const Joi = require('@hapi/joi')

exports.addProducts = ( req,res,next) => {
    console.log("Before Validating ===> ", req.body)
    const payload = req.body;

    const schema = Joi.object({
        productName: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required(),
        category: Joi.string().required
    })

    const {error,value} = schema.validate(payload)
    console.log("After validating",value)
    if(error){
        return createErrorResponse(res, error.details[0].message.replace(/['"]/g,''), 422);
    }
    return next();

}