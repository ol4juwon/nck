"use strict"
const router = require('express').Router();
const cartController = require("../../app/v1/cart/AuthController");
const cartValidator= require("../../app/v1/cart/AuthValidator")
const {validateUser} = require("../../app/Middleware")

router.post("/add",validateUser,cartValidator.addtoCart, cartController.addToCart);

module.exports = router