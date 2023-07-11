const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10)
const secret = process.env.SECRET_TOKEN

function hasingPassword(password) {
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password, dbPassword) {
    return bcrypt.compareSync(password, dbPassword)
}

function generateToken(payload) {
    return jwt.sign(payload, secret)
}

function decodeToken(token) {
    return jwt.verify(token, secret)
}

module.exports = { hasingPassword, comparePassword, generateToken, decodeToken }