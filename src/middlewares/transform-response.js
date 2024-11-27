const { userHelper } = strapi.config.functions.helpers;

/**
 * Check if a variable is an array.
 * @param   {*}       data  Variable to check
 * @returns {Boolean}
 */
function isArray(data) {
  return !!data && data.constructor === Array;
}

/**
 * Check if a variable is an object.
 * @param   {*}       data  Variable to check
 * @returns {Boolean}
 */
function isObject(data) {
  return !!data && data.constructor === Object;
}

/**
 * Check if an object has a 'data' attribute.
 * @param   {Object}  object  object to check
 * @returns {Boolean}
 */
function hasDataAttribute(object) {
  return object?.hasOwnProperty("data");
}

/**
 * Check if an object has an 'id' and an 'attributes' attribute.
 * @param   {Object}  object Object to check
 * @returns {Boolean}
 */
function hasIdAndAttributes(object) {
  return object?.hasOwnProperty("id") && object?.hasOwnProperty("attributes");
}

/**
 * Goes through an array and process every of it's entries.
 * @param   {Array}   dataArray Array to process
 * @returns {Array}
 */
function processArray(dataArray) {
  const newArray = [];

  dataArray.forEach((entry) => {
    newArray.push(processAttribute(entry));
  });

  return newArray;
}

/**
 * Process the data attribute of an object.
 * @param   {Object}  objectAttribute Object to process
 * @returns {*}
 */
function processDataAttributeOfAnObject(objectAttribute) {
  if (isArray(objectAttribute.data)) {
    return processArray(objectAttribute.data);
  } else if (
    isObject(objectAttribute.data) &&
    hasIdAndAttributes(objectAttribute.data)
  ) {
    return transformObject(objectAttribute.data);
  } else {
    return objectAttribute.data;
  }
}

/**
 * Goes through an object and process all of it's attributes.
 * @param   {Object}  object  Object to process
 * @returns {Object}
 */
function processAttributesOfObject(object) {
  const newAttribute = {};

  for (const [key, nestedAttribute] of Object.entries(object)) {
    newAttribute[key] = processAttribute(nestedAttribute);
  }

  return newAttribute;
}

/**
 * Check if an object needs to be transform.
 * @param   {Object}  objectAttribute   Object to process
 * @returns {Object}
 */
function processObject(objectAttribute) {
  if (hasDataAttribute(objectAttribute)) {
    return processDataAttributeOfAnObject(objectAttribute);
  } else if (hasIdAndAttributes(objectAttribute)) {
    return transformObject(objectAttribute);
  } else {
    return processAttributesOfObject(objectAttribute);
  }
}

/**
 * Transform an object to remove the 'attributes' attribute to have a new object shaped like a strapi v3 response.
 * Recursively process all the attributes of the new object.
 * @param   {Object}  objectToTransform
 * @returns {Object}
 */
function transformObject(objectToTransform) {
  const { id, attributes } = objectToTransform;

  const newAttributes = processAttributesOfObject(attributes);

  return {
    id,
    ...newAttributes,
  };
}

/**
 * Check if an attribute is an object, an array or neither of it.
 * Call the related function to process the attribute.
 * @param   {*}   attribute   Attribute to process
 * @returns {*}
 */
function processAttribute(attribute) {
  if (isObject(attribute)) {
    return processObject(attribute);
  } else if (isArray(attribute)) {
    return processArray(attribute);
  } else {
    return attribute;
  }
}

module.exports = () => {
  return async (ctx, next) => {
    await next();

    // check the current user's role to only trigger this middleware on the responses for API users (and not for the back office users)
    if (
      userHelper.isAuthenticatedUser(ctx) ||
      userHelper.isGlobalUser(ctx) ||
      userHelper.isContentManagerUser(ctx)
    ) {
      const { body } = ctx.response;

      // if response is not an error, check if it needs transformation
      if (body && !body?.error) {
        ctx.response.body = processAttribute(body);
      }
    }
  };
};
