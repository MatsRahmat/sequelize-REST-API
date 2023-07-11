const { Contry, ContryLanguage, Language } = require('../models')
const { hasingPassword, comparePassword, generateToken, decodeToken } = require('../helpers/helper')


class LanguageController {

    static async readContry(req, res) {
        try {
            const contry = await Contry.findAll()
            res.status(200).json(contry)
        } catch (error) {
            res.status(500).json({error})
        }
        
    }

    static async addContry(req, res){
        try {
            
        } catch (error) {
            
        }
    }

    static async contryDetails(req, res){
        try {
            const joinedContry = await Contry.findAll({
                where: {
                },
                include: {
                    model: ContryLanguage,
                    attributes:['id'],
                    include: {
                        model:Language
                    }
                }
            })
            res.status(200).json(joinedContry)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = LanguageController