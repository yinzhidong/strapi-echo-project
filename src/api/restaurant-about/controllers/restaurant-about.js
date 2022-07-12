'use strict';

/**
 *  restaurant-about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


/** 
 * 获取utc时间的时间戳
 */
const parseDataUTC2Local = (dataUTC) => {
  // return new Date("2022-07-12T13:53:39.654Z").getTime();
  return dataUTC.getTime();
}

module.exports = createCoreController('api::restaurant-about.restaurant-about', ({ strapi }) => ({

  async find(ctx) {
    // some logic here
    const response = await super.find(ctx);
    let { data, meta } = await super.find(ctx);
    // console.log('response==', response);

    // some more logic

    const time = new Date().getTime();
  
    return {data, meta, time};
  }
  

}));
