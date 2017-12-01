'use strict'
const log = require('../../config').common;
const logger = require('../../config').error;
const format = require('../util').format;
const intfModel = require('../model/intfModel')

const Intf = {
  /**
   * 新增接口及mock数据
   * @param {object} formData 
   */
  async insertIntf(data) {
    let result = await intfModel.insertIntf(data)
    return result
  },
}

module.exports = Intf;