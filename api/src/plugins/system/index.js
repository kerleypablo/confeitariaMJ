const Api = require('./core.api')

module.exports = {
    async setup () {
        console.log('plugin system');
        Api.Register('/system/apis/auth')
        Api.Register('/system/models/user')
    }
}