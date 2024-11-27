"use strict";

/**
 * course service
 */

const { sanitize } = require("@strapi/utils");

const { createCoreService } = require("@strapi/strapi").factories;

const getConfigFilters = () => {
  return {
    degreeCode: {
      options: [],
      type: "radio",
    },
    entryLevel: {
      options: [],
      type: "radio",
    },
    graduationLevel: {
      options: [],
      type: "radio",
    },
    degreeLevel: {
      options: [],
      type: "radio",
    },
    campuses: {
      options: [],
      parameter: "slug",
      label: "label",
      type: "checkbox",
    },
    fundings: {
      options: [],
      parameter: "slug",
      label: "label",
      type: "checkbox",
    },
    course_sector: {
      options: [],
      parameter: "slug",
      label: "label",
      type: "radio",
    },
    course_careers: {
      options: [],
      parameter: "slug",
      label: "label",
      type: "checkbox",
    },
    durationFormat: {
      options: [],
      type: "radio",
    },
    rhythm: {
      options: [],
      type: "radio",
    },
    method: {
      options: [],
      type: "radio",
    },
    accessibilities: {
      options: [],
      type: "radio",
    },
    programCat: {
      options: [],
      parameter: "slug",
      label: "titre",
      type: "checkbox",
    },
  };
};

const parseItemFilters = (item, filters) => {
  const keys = Object.keys(filters);
  keys.forEach((key) => {
    const data = item[key];
    const filter = filters[key];
    if (!data) return;

    if (Array.isArray(data)) {
      data.forEach((elt) => {
        const value = filter.parameter ? elt[filter.parameter] : elt;
        const label = filter.label ? elt[filter.label] : elt;
        let record = filter.options.find((option) => option.value === value);
        if (record) {
          record.count += 1;
        } else {
          record = {
            label,
            value,
            count: 1,
          };
          filters[key].options.push(record);
        }
      });
    } else {
      const value = filter.parameter ? data[filter.parameter] : data;
      const label = filter.label ? data[filter.label] : data;
      let record = filter.options.find((option) => option.value === value);
      if (record) {
        record.count += 1;
      } else {
        record = {
          label,
          value,
          count: 1,
        };
        filter.options.push(record);
      }
    }
  });
  // sort options
  Object.keys(filters).forEach((key) => {
    filters[key].options.sort((a, b) => {
      let labelA;
      let labelB;
      try {
        labelA = a.label.toLowerCase();
        labelB = b.label.toLowerCase();
      } catch (e) {
        labelA = a.label;
        labelB = b.label;
      }

      if (labelA < labelB) {
        return -1;
      }
      if (labelA > labelB) {
        return 1;
      }
      return 0;
    });
  });
  return filters;
};

module.exports = createCoreService("api::course.course", ({ strapi }) => ({
  parseFilters(result) {
    let filters = getConfigFilters(result);

    result.forEach((item) => {
      filters = parseItemFilters(item, filters);
    });

    return filters;
  },
  async searchCourse(query, schools, profile) {
    try {
      let { _q: textSearch, filters: queryFilters } = query;

      const entities = await strapi.db.connection
        .select(
          strapi.db.connection.raw(
            "DISTINCT courses.id, fts_search, ts_rank(fts_search, plainto_tsquery('french_custom', ?), 32) as rank",
            [textSearch]
          )
        )
        .from("courses")
        .whereNotNull("courses.published_at")
        .whereRaw("fts_search @@ plainto_tsquery('french_custom', ?)", [
          textSearch,
        ])
        .orderBy("rank", "DESC");

      const filters = {
        id: entities.map((entity) => entity.id),
        school: schools,
        profile: { id: profile.id },
        ...queryFilters,
      };

      if (query["graduationLevel_gte"])
        filters.graduationLevel = { $gte: query["graduationLevel_gte"] };

      const populatedEntities = await strapi.db
        .query("api::course.course")
        .findMany({
          where: filters,
          populate: strapi.config["population-schemas"].collections.course,
        });

      const populatedEntitiesWithSearch = populatedEntities.map((entity) => {
        const matchedEntity = entities.find((item) => item.id === entity.id);
        if (matchedEntity) {
          entity.fts_search = matchedEntity.fts_search;
          entity.rank = matchedEntity.rank;
        }
        return entity;
      });

      const sanitizedEntities = await sanitize.contentAPI.output(
        populatedEntitiesWithSearch,
        strapi.getModel("api::course.course")
      );

      if (!textSearch) {
        sanitizedEntities.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        sanitizedEntities.sort((a, b) => b.degreeLevel - a.degreeLevel);
      }

      return sanitizedEntities;
    } catch (error) {
      console.error("Error: ", error);
      return [];
    }
  },
}));
