"use strict"
const router = require('express').Router();
const cartController = require("../../app/v1/cart/cartController");
// const cartValidator= require("../../app/v1/cart/AuthValidator")
const {validateUser} = require("../../app/Middleware")

router.post("/add",validateUser, cartController.addToCart);

module.exports = router