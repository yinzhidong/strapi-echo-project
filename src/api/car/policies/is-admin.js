module.exports = (policyContext, config, {strapi}) => {
  if(policyContext.state.user && policyContext.state.user.isAdmin) {
    return true;
  }

  return false;
}