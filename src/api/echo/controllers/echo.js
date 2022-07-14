
// const serve = require("koa-static")

module.exports = {
  async static(ctx, next) { // called by GET /hello 
    ctx.body = 'Hello World!'; // we could also send a JSON
  },
};