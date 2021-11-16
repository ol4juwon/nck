"use strict";
const router = require('express').Router();

const authRouter = require('./auth')
const inventoryRouter = require('./inventory')

router.use('/auth', authRouter);
router.use('/inventory', inventoryRouter)

module.exports  = router;