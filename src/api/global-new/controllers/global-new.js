"use strict";

/**
 * global-new controller
 */

const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;
const { userHelper } = strapi.config.functions.helpers;

/**
 * fonction qui retourne le nom de la collection et le nom du site dont est issue une news globale ainsi que le nom de l'attribut contenant la news
 * @param {Object} globalNews
 * @return {Object}
 */
function __getCollectionName(globalNews) {
  const splited = globalNews.__component.split(".");

  if (splited.length > 1) {
    const collectionName = splited[1].replace(/s$/g, "");
    const schoolName = collectionName.split("-")[0];

    return schoolName;
  }
  return null;
}

module.exports = {
  async findNews(ctx) {
    if (userHelper.isGlobalUser(ctx)) {
      const contentType = strapi.contentType("api::global-new.global-new");

      const entities = await strapi.entityService.findMany(
        "api::global-new.global-new",
        {
          filters: {
            website: { id: ctx.state.user.id },
          },
          populate: strapi.config["population-schemas"].collections.globalNews,
        }
      );

      if (entities.length < 1) {
        return;
      }

      const entity = entities[0];

      // pour chacune des news retournée on renseigne le namespace d'origine
      for (const newsEntity of entity.news) {
        const schoolName = __getCollectionName(newsEntity);
        newsEntity["news-origin"] = schoolName;
      }

      if (entity.main_news.length > 0) {
        entity.main_news = entity.main_news[0];
      } else {
        entity.main_news = null;
      }

      return await contentAPI.output(entity, contentType, ctx.state.auth);
    }
  },
};
