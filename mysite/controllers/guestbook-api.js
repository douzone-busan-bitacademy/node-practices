const models = require('../models');
const { Op } = require("sequelize");

module.exports = {
    create: async function(req, res, next) {   
        const result = await models.Guestbook.create(req.body);
        res.send({
            result: 'success',
            data: result,
            message: null
        });
    },
    read: async function(req, res, next) {
        const startNo = req.query.sno || 0;
        const results = await models.Guestbook.findAll({
            attributes: ['no', 'name', 'message'],
            where: (startNo > 0) ? {no: {[Op.lt]: startNo}} : {},
            order: [
                ['no', 'desc']
            ],
            limit: 3
        });

        res.send({
            result: 'success',
            data: results,
            message: null
        });
    },
    delete: async function(req, res, next) {
        const no = req.params.no || 0;
        const result = await models.Guestbook.destroy({
            where: {
                [Op.and]: {
                    no: no,
                    password: req.body.password
                }
            }
        });
        res.send({
            result: 'success',
            data: no,
            message: null
        });       
    }
}
