"use strict";
const router = require('express').Router();

const authRouter = require('./auth')
const inventoryRouter = require('./inventory')
const cartRouter = require('./cart')

router.use('/auth', authRouter);
router.use('/inventory', inventoryRouter)
router.use('/cart',cartRouter)

module.exports  = router;