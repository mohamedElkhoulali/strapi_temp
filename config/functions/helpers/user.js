function isAuthenticatedUser(ctx) {
  return ctx.state.user && ctx.state.user?.role?.type === "authenticated";
}

function isGlobalUser(ctx) {
  return ctx.state.user && ctx.state.user?.role?.type === "globaluser";
}

// /!\ it is a different role than back office users
function isContentManagerUser(ctx) {
  return ctx.state.user && ctx.state.user?.role?.type === "contentmanager";
}

function hasNamespace(ctx) {
  return ctx.state.user?.namespace !== "";
}

module.exports = {
  isAuthenticatedUser,
  isGlobalUser,
  isContentManagerUser,
  hasNamespace,
};
