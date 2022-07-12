"use strict";

/**
 *  car controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const fs = require("fs");
const path = require('path');


module.exports = createCoreController("api::car.car", ({ strapi }) => ({
  /**
   * 自定义find
   * @param {*} ctx
   */
  async find(ctx) {
    let { data, meta } = await super.find(ctx);

    data = data.map((item) => item.attributes.name);

    return { data, meta };
  },

  async findCustomer(ctx) {
    return {
      time: new Date().getTime(),
      data: "findCustomer api...",
    };
  },



  /**
   * koa备份文件
   * @param {*} ctx 
   */
  async backupData(ctx) {
    var result =  path.join(process.cwd(), '.tmp/data.db');
    // var result =  path.join(__dirname, './');
    // console.log('__dirname=' + __dirname);
    // console.log('cwd=' + process.cwd());
    // console.log('result===', result);

    ctx.set("Content-disposition", `attachment; filename=app.db`);
    ctx.statusCode = 200;
    ctx.body = fs.createReadStream(result);
  },
}));
