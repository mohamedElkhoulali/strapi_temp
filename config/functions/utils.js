// https://docs.strapi.io/dev-docs/migration/v3-to-v4/plugin/migrate-back-end#manual-content-types-getters-update

function isPublishAction(data) {
  const keys = Object.keys(data);
  return keys.length === 3 && keys.indexOf("publishedAt") > -1;
}

function getRelationsAttributesAndPopulation(modelName) {
  const { attributes } = strapi.contentType(modelName);
  const relations = [];
  const populate = {};

  // on récup les noms attributs qu'il faudra traiter
  Object.keys(attributes).forEach((attributeName) => {
    const attr = attributes[attributeName];
    const isARelation = attr.type == "relation";
    const hasACorrespondingBoolean = attributes[attributeName + "Empty"]
      ? true
      : false;

    if (isARelation && hasACorrespondingBoolean) {
      relations.push(attributeName);

      populate[attributeName] = true;
    }
  });

  return {
    relations,
    populate,
  };
}

function checkForAddedItems(relations, data) {
  relations.forEach((relationAttribute) => {
    if (data[relationAttribute]?.connect.length > 0) {
      // si on a un connect (nb de id ajouté) non vide alors false
      data[relationAttribute + "Empty"] = false;
    }
  });

  return data;
}

async function checkForRemovedItems(
  modelName,
  data,
  where,
  relations,
  populate
) {
  try {
    // on récup les données actuelles
    const existingDatas = await strapi.db.query(modelName).findOne({
      where,
      populate,
    });

    // on vérifie si les relations son vides
    relations.forEach((relationAttribute) => {
      if (data[relationAttribute]?.connect.length > 0) {
        // si on a un connect (nb de id ajouté) non vide alors false
        data[relationAttribute + "Empty"] = false;
      } else if (data[relationAttribute]?.disconnect.length > 0) {
        // si on a un disconect non vide alors on check si toutes les relations ont été retirées
        data[relationAttribute + "Empty"] =
          existingDatas[relationAttribute].length -
            data[relationAttribute]?.disconnect.length ===
          0;
      }
    });
  } catch (e) {
    console.log("fixEmptyRelations.checkForRemovedItems", e);
  } finally {
    return data;
  }
}

module.exports = {
  async fixEmptyRelations(modelName, data, where = null) {
    if (isPublishAction(data)) {
      return data;
    }

    const { relations, populate } =
      getRelationsAttributesAndPopulation(modelName);

    // on traite les données ajoutées
    data = checkForAddedItems(relations, data);

    // si on est pas dans une action de CREATE
    if (where?.id) {
      // on traite les données retirées
      data = await checkForRemovedItems(
        modelName,
        data,
        where,
        relations,
        populate
      );
    }

    return data;
  },
  /**
   * Add a filter to a queryParams object. If the query already contains a filter object, merges the filter together
   * @param   {Object} queryParams
   * @param   {Object} filter - ex : { columnName: value }
   * @returns {Object}
   */
  addFilterToQuery(queryParams, filter) {
    if (queryParams.filters) {
      queryParams.filters = {
        ...filter,
        ...queryParams.filters,
      };
    } else {
      queryParams.filters = filter;
    }

    return queryParams;
  },
};
