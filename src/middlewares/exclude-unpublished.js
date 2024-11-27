const { userHelper } = strapi.config.functions.helpers;

module.exports = () => {
  return async (ctx, next) => {
    // check the current user's role to only trigger this middleware on the responses for API users (and not for the back office users)
    if (
      userHelper.isAuthenticatedUser(ctx) ||
      userHelper.isGlobalUser(ctx) ||
      userHelper.isContentManagerUser(ctx)
    ) {
      ctx.query = { ...ctx.query, publicationState: "live" };
    }

    await next();
  };
};
