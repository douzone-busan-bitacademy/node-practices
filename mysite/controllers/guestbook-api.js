module.exports = {
    create: async function(req, res, next) {
        console.log(req.body);
        // sql insert
        res.status(200).send({
            result: 'success',
            data: Object.assign(req.body, {
                no: 10,
                password: '',
                regDate: new Date()
            }),
            message: null
        });
    }
}