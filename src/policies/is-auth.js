
/**
 * 全局的权限配置
 * @param {*} policyContext 
 * @param {*} config 
 * @param {*} param2 
 * @returns 
 */
module.exports = (policyContext, config, {strapi}) => {
  // 是否有用户登陆
  if(policyContext.state.user) {
    return true;
  }

  return true;
  // return false;
}