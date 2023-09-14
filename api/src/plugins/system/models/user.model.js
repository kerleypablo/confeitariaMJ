const Model = require('../core.model')

module.exports =  new Model.Schema({
    name: 'system/user',
    model: {
        email: {
            type: Model.String,
            labe: "E-mail",
            require: true
        },
        password: {
            type: Model.String,
            labe: "senha",
            require: true
        }
    }
})