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
  insertIntf(data) {
    let result = intfModel.insertIntf(data)
    return result
  },
}

module.exports = Intf;