/**
 * When a query uses the pagination feature alongside the sort attribute we may face a duplicated entries issue when the sorted field as the same value repeated multiple time
 * This is a known bug in strapi described here : https://github.com/strapi/strapi/issues/15953
 *
 * To solve this problem we automatically add a second sort by ID to ensure that we always get the same entries sorted order before they are paginated
 */

module.exports = () => {
  return async (ctx, next) => {
    if (
      ctx.query.pagination?.page &&
      ctx.query.pagination?.pageSize &&
      ctx.query.sort
    ) {
      const { sort } = ctx.query;

      if (typeof sort === "string") {
        ctx.query.sort = [sort, "id:asc"];
      } else if (typeof sort === "object") {
        sort.push("id:asc");
        ctx.query.sort = sort;
      }
    }

    await next();
  };
};
