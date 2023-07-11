const { generateToken, decodeToken } = require('../helpers/helper')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if(!access_token) throw { name: 'InvalidAccessToken'}
        const { email } = decodeToken(access_token)
        const user = await User.findOne({where: {email}})
        req.user = {
            id: user.id,
            name: user.name,
            role: user.role
        }
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = authentication