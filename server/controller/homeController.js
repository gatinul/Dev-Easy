'use strict'
const log = require('../../config').common;
const logger = require('../../config').error;
const format = require('../util').format


module.exports = {
  /**
   * 渲染首页
   * @param {obj} ctx 
   */
  async index(ctx) {
    await ctx.render('index')
  },
}