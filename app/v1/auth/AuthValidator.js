"use strict"

const Joi = require('@hapi/joi')

exports.registerValidation = ( req,res,next) => {
console.log("Before Validating ===> ", req.body)
    const schema = Joi.object( {
        firstName: Joi.string().min(4).required(),
        lastName : Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),

    
    })

    const {error,value} = schema.validate(req.body)
    console.log("After validating",value)
    if(error){
        return createErrorResponse(res, error.details[0].message.replace(/['"]/g,''), 422);
    }
    return next();
    
}

exports.loginValidation = (req,res,next) => {
    console.log("before Validating", req.body)
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    const {error} = schema.validate(req.body)

    if(error){
        return createErrorResponse(res, error.details[0].message.replace(/['"]/g,''), 422);
    }

    return next();
}