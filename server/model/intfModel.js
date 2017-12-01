const db = require('../db.config.js')

const Intf = {
    /**
     * 插入表easy_interface中
     * @param {object} model 
     */
    async insertIntf(model) {
      let result = await db.insertData('easy_interface', model)
      return result
    },
}

module.exports = Intf;