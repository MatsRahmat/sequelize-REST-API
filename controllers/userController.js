const { User } = require('../models')
const { comparePassword, generateToken } = require('../helpers/helper')

class UserController {

    static async register(req, res) {
        const { name, password, email, gender } = req.body
        // console.log(name, password, email, gender);
        try {
            const newUser = await User.create({ name, password, email, gender, role: 'Client' })
            res.status(201).json({
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async login(req, res){
        const { password, email} = req.body
        try {
            const userLogin = await User.findOne({where: {email}})
            if(!userLogin) throw { name: 'NotFound'}
            if(!comparePassword(password, userLogin.password)) throw { name: 'WrongPassword'}
            const token = generateToken({
                id: userLogin.id,
                name: userLogin.name,
                email: userLogin.email
            })
            res.status(201).json({statusCode: 201,token})
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = UserController