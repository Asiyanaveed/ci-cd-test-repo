const express = require("express")
const {createFunction} = require("../controllers/user.controller")
const {createValidationMiddleware}  = require("../middleware/user.middleware")

const router = express.Router()

router.post("/create",createValidationMiddleware, createFunction)

module.exports = router


