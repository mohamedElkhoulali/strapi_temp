module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"), 
        //sasToken: env("STORAGE_ACCOUNT_SAS_TOKEN"),
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
       // cdnBaseURL: env("STORAGE_CDN_URL"), // optional
        //defaultCacheControl: env("STORAGE_CACHE_CONTROL") // optional
      },
    },
  },
  
  /* CLOUDINARY PREPROD
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  */
  // Step 1: Configure the redis connection
  redis: {
    config: {
      connections: {
        default: {
          connection: {            
            host: env('REDIS_HOST', 'localhost'),
            port: env.int('REDIS_PORT', 6379),
            password: env('REDIS_PASSWORD', ''),
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
    // Step 2: Configure the redis cache plugin
    "rest-cache": {
      config: {
        provider: {
          name: "redis",
          options: {
            max: 32767,
            connection: "default",
          },
        },
        strategy: {
          // if you are using keyPrefix for your Redis, please add <keysPrefix>
          //keysPrefix: "<redis_keyPrefix>",
          contentTypes: [
            // list of Content-Types UID to cache
            { contentType: "api::event.event", cacheTimeout: 600 }, // Events - frequent updates (10 minutes)
            { contentType: "api::course.course", cacheTimeout: 3600 }, // Courses - updates less often (1 hour)
            { contentType: "api::campus.campus", cacheTimeout: 3600 }, // Campus info - (1 hour)
            { contentType: "api::homepage.homepage", cacheTimeout: 86400 }, // Homepage - rare updates (1 day)
            { contentType: "api::brochure.brochure", cacheTimeout: 86400 }, // Brochures - (1 day)
            { contentType: "api::school.school", cacheTimeout: 86400 }, // Schools - (1 hour)
            { contentType: "api::campus-landing.campus-landing", cacheTimeout: 86400 }, // Campus landing pages - (2 hours)
            { contentType: "api::campus-contact.campus-contact", cacheTimeout: 86400 }, // Campus contacts - (2 hours)
            { contentType: "api::menu-enrichi.menu-enrichi", cacheTimeout: 86400 }, // Enriched menu - semi-static (12 hours)
            { contentType: "api::campus-geozone.campus-geozone", cacheTimeout: 86400 }, // Campus geozone - rare updates (1 day)
            { contentType: "api::course-skills-unit.course-skills-unit", cacheTimeout: 86400 }, // Course skills unit - frequent updates (1 hour)
            { contentType: "api::course-career.course-career", cacheTimeout: 86400 }, // Course career info - frequent updates (1 hour)
            { contentType: "api::course-sector.course-sector", cacheTimeout: 86400 }, // Course sector - frequent updates (1 hour)
            { contentType: "api::epsi-new.epsi-new", cacheTimeout: 7200 }, // EPSI news - updated regularly (2 hours)
            { contentType: "api::epsi-article.epsi-article", cacheTimeout: 86400 }, // EPSI articles - updated regularly (2 hours)
            { contentType: "api::ifag-new.ifag-new", cacheTimeout: 7200 }, // IFAG news - (2 hours)
            { contentType: "api::ifag-article.ifag-article", cacheTimeout: 86400 }, // IFAG articles - (2 hours)
            { contentType: "api::igefi-new.igefi-new", cacheTimeout: 7200 }, // IGEFI news - (2 hours)
            { contentType: "api::igefi-article.igefi-article", cacheTimeout: 86400 }, // IGEFI articles - (2 hours)
            { contentType: "api::ileri-new.ileri-new", cacheTimeout: 7200 }, // ILERI news - (2 hours)
            { contentType: "api::ileri-article.ileri-article", cacheTimeout: 86400 }, // ILERI articles - (2 hours)
            { contentType: "api::supdecom-new.supdecom-new", cacheTimeout: 7200 }, // Supdecom news - (2 hours)
            { contentType: "api::supdecom-article.supdecom-article", cacheTimeout: 86400 }, // Supdecom articles - (2 hours)
          ],
        },
      },
    },
});
