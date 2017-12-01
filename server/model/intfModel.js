const db = require('../utils/db.config.js')

const Intf = {
    /**
     * 插入表easy_interface中
     * @param {object} model 
     */
    async insertIntf(model) {
        console.log(`创建时间：${model.create_time}`)
        let result = await db.insertData('easy_interface', model)
        return result
    },
}

module.exports = Intf;