const express = require('express')
const authenticationMiddleware = require('../middleware/auth')
const { dashboard, login } = require('../controllers/main')
const router = express.Router()



router.route(`/dashboard`).get(authenticationMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router