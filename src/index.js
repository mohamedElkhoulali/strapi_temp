"use strict";

async function _initDbTextConfiguration(strapi) {
  try {
    console.info("INIT DB TEXT CONFIGURATION");
    await strapi.db.connection.raw(
      "DROP TEXT SEARCH CONFIGURATION IF EXISTS french_custom"
    );
    await strapi.db.connection.raw(
      "CREATE TEXT SEARCH CONFIGURATION french_custom ( COPY=french )"
    );
    await strapi.db.connection.raw("CREATE EXTENSION IF NOT EXISTS unaccent");
    await strapi.db.connection.raw(
      "ALTER TEXT SEARCH CONFIGURATION french_custom DROP MAPPING FOR email, sfloat, float, int, uint"
    );
    await strapi.db.connection.raw(
      "ALTER TEXT SEARCH CONFIGURATION french_custom ALTER MAPPING FOR hword, hword_part, word WITH unaccent, french_stem;"
    );
  } catch (e) {
    console.info("error", e);
  }
}

async function _configureFtsSearch(strapi) {
  try {
    await strapi.db.connection.raw(
      "ALTER TABLE courses DROP COLUMN IF EXISTS fts_search"
    );
    await strapi.db.connection
      .raw(`ALTER TABLE courses ADD COLUMN fts_search tsvector GENERATED ALWAYS AS
      (
        (
          setweight(to_tsvector('french_custom', coalesce(name, '')), 'A') || ' ' ||
          setweight(to_tsvector('french_custom', coalesce(title, '')), 'A') || ' ' ||
          setweight(to_tsvector('french_custom', coalesce(subtitle, '')), 'A') || ' ' ||
          setweight(to_tsvector('french_custom', coalesce(search, '')), 'A') || ' ' ||
          setweight(to_tsvector('french_custom', coalesce(description, '')), 'B') || ' ' ||
          setweight(to_tsvector('french_custom', coalesce(summary, '')), 'B') || ' ' ||
          setweight(to_tsvector('french_custom', coalesce(admission, '')), 'B') || ' ' ||
          setweight(to_tsvector('french_custom', coalesce(evaluation, '')), 'C')
        )::tsvector
      ) STORED`);
    await strapi.db.connection.raw(
      "CREATE INDEX ON courses USING GIN (fts_search)"
    );
  } catch (e) {
    console.info("error on course table", e);
  }
}

async function _initStoreTaxonomy(strapi) {
  try {
    const store = strapi.config.store.taxonomy;
    const namespaces = await strapi.config.functions.namespace.getNamespaces();

    // for each namespace, check if <namespace>-taxonomy exists and set its last update date in the store.
    for (const namespace of namespaces) {
      const modelUid = `api::${namespace}-taxonomy.${namespace}-taxonomy`;
      const contentType = strapi.contentType(modelUid);
      if (contentType) {
        const query = {
          fields: ["updatedAt"],
          sort: { updatedAt: "desc" },
          limit: 1,
        };
        const result = await strapi.entityService.findMany(modelUid, query);
        if (result?.length && result[0].updatedAt) {
          store.mutations.SET_LAST_UPDATE_DATE_FOR_NAMESPACE(
            namespace,
            result[0].updatedAt
          );
        }
      }
    }
  } catch (e) {
    console.info("error initializing store/taxonomy", e);
  }
}

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    await _initDbTextConfiguration(strapi);
    await _configureFtsSearch(strapi);
    await _initStoreTaxonomy(strapi);
  },
};
