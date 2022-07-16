module.exports = {

  routes: [
    {
      method: "GET",
      path: "/cars/findCustomer",
      handler: "car.findCustomer",

      // 配置权限等策略
      config: {
        // policies: ["global::is-auth"],
        // policies: ["api::car.is-admin"]
      }
    },
    {
      method: "GET",
      path: "/cars/backupData",
      handler: "car.backupData"
    },

    // 覆盖findOne
    {
      method: "GET",
      path: "/cars/:code",
      handler: "car.findOne",
      confirm: {
        // auth: false
      }
    }
  ]


  // npx strapi policies:list
}