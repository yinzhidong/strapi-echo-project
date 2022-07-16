
module.exports = {
  beforeCreate(event) {
    // const { data, where, select, populate } = event.params;
    // console.log("beforeCreate data=", data);
    // console.log("beforeCreate where=", where);

    // let's do a 20% discount everytime
    // event.params.data.price = event.params.data.price * 0.8;
  },

  afterCreate(event) {
    // const { result, params } = event;

    // console.log("afterCreate result=", result);
    // console.log("afterCreate params=", params);
    // do something to the result;
  },
};
