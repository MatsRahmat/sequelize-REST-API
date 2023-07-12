const { Contry, ContryLanguage, Language } = require('../models')
const { Op } = require("sequelize");
// const { hasingPassword, comparePassword, generateToken, decodeToken } = require('../helpers/helper')


class LanguageController {

    static async readContry(req, res) {
        const { search } = req.query
        try {
            const option = {
                where: {
                },
                attributes: {
                    exclude: ['createdAt']
                },
                include: {
                    model: ContryLanguage,
                    attributes: ['id'],
                    include: {
                        model: Language,
                        attributes: {
                            exclude: ['createdAt']
                        }
                    }
                },
                order: [['name', 'asc']]
            }

            // check if param search avalaible
            if (search) {
                option.where.name = {
                    [Op.iLike]: `%${search}%`
                }
            }

            const joinedContry = await Contry.findAll(option)
            res.status(200).json(joinedContry)
        } catch (error) {
            console.log(error);
        }

    }

    static async addContry(req, res) {
        const { name, capital, flag, populatiom, currency, language } = req.body
        try {
            // console.log(name, capital, flag, populatiom, currency, language)
            const newContry = await Contry.create({name, capital, flag, populatiom, currency})
            if(language.length === 1) await ContryLanguage.create({ contryId: newContry.id, languageId: language})
            

        } catch (error) {

        }
    }

    static async contryDetails(req, res) {
        const { id } = req.params
        try {
            const detailContry = await Contry.findOne({
                where: {
                    id: id
                },
                attributes: {
                    exclude: ['createdAt']
                },
                include: {
                    model: ContryLanguage,
                    attributes: ['id'],
                    include: {
                        model: Language,
                        order: [['name', 'asc']]
                    }
                },
            })
        } catch (error) {
            
        }
    }
}

module.exports = LanguageController