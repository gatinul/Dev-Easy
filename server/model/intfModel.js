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
    async isExist() {
      let _sql = `
          SELECT * FROM easy_interface`
      let result = await db.query(_sql)
      return result
    },
}

module.exports = Intf;