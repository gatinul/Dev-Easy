'use strict'
const log = require('../../config').common;
const logger = require('../../config').error;
const format = require('../util').format
const intfService = require('../service/intfService')

module.exports = {
  /**
   * 添加接口信息到数据库
   * @param {obj} ctx 
   */
  async add(ctx) {
    console.log(ctx.request.body)
    const result = {
      success: true,
      message:''
    }
    const data = intfService
    ctx.body = result;
  },
}