module.exports = () => {
  return async (ctx, next) => {
    if (ctx.query.pagination) {
      if (ctx.query.pagination.start)
        ctx.query.start = Number(ctx.query.pagination.start);

      if (ctx.query.pagination.limit)
        ctx.query.limit = Number(ctx.query.pagination.limit);
    }
    await next();
  };
};
