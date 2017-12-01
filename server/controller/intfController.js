'use strict'
const log = require('../../config').common;
const logger = require('../../config').error;
const format = require('../util').format
const intfService = require('../service/intfService')
const time = require('silly-datetime')


module.exports = {
  /**
   * 添加接口信息到数据库
   * @param {obj} ctx 
   */
  async add(ctx) {
    log.info(format(ctx.request.body.name,  __filename))
    const req = ctx.request.body
    const result = {
      success: false,
      message:''
    }
    const res = intfService.insertIntf({
      inter_name: req.name,
      type: req.type,
      result: req.result,
      result_type: req.tag,
      staff: req.staff,
      desc: req.desc,
      update_time: time.format(new Date())
    })
    console.log(res)
    if(res){result.success = true}
    ctx.body = result;
  },
}