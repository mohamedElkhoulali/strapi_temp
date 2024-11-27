"use strict";

/**
 * Since strapi gives an object to indicates where the data will be inserted in a relation update,
 * here is a function to insert what you need where you need
 * @param {Array} toUpdate array (relation) in which we will insert data
 * @param {Object} position the strapi ugly object which says where we will insert data
 * @param {*} toInsert what we need to add, its type doesn't matter
 * @returns {Array}
 */
function insertDataInRelation(toUpdate, position, toInsert) {
  if (position.start) {
    // add to the beginning of the array
    toUpdate.splice(0, 0, toInsert);
  } else if (position.end) {
    // add to the end of the array
    toUpdate.push(toInsert);
  } else if (position.before) {
    // add before the specified element
    const beforeIndex = toUpdate.findIndex((elem) => {
      return elem.id == position.before;
    });
    toUpdate.splice(beforeIndex - 1, 0, toInsert);
  } else if (position.after) {
    // add after the specified element
    const afterIndex = toUpdate.findIndex((elem) => {
      return elem.id == position.after;
    });
    toUpdate.splice(afterIndex, 0, toInsert);
  } else {
    // default: add to end of the array
    toUpdate.push(toInsert);
  }

  return toUpdate;
}

/**
 * Returns what a relation should look like after update.
 * @param {Array} baseArray old populated data that needs to be updated. Won't work if its elements have no id.
 * @param {Array} connected the 'connect' property of the relation in update events (event.params.data.<example>.connect)
 * @param {Array} disconnected the 'disconnect' property of the relation in update events (event.params.data.<example>.disconnect)
 * @param {Function} findMissingData findOne function for data that was added
 * @return {Array} an updated version of baseArray (what it should look like after saving)
 */
async function getRelationsUpdateResult(
  baseArray,
  connected,
  disconnected,
  findMissingData
) {
  let updatedArray = [];
  if (disconnected) {
    updatedArray = baseArray.filter((elem) => {
      if (!elem.id) return true;

      // First remove disconnected elements
      const isDisconnected = disconnected.some((d) => {
        return d.id == elem.id;
      });

      // Then remove those that have been moved. We will replace them later.
      const isMoved = connected.some((d) => {
        return d.id == elem.id;
      });

      return !(isDisconnected || isMoved);
    });
  }

  if (connected) {
    for (const c of connected) {
      if (!c.position) return;
      const data = await findMissingData(c.id);
      if (!data) return;
      updatedArray = insertDataInRelation(updatedArray, c.position, data);
    }
  }

  return updatedArray;
}

/**
 * Check if a collection already has an entry with using the relation contained in the event parameter
 * @param   {Object}  event         lifecycle event
 * @param   {String}  relationName  attribute name of the relation
 * @returns {Boolean}
 */
async function isRelationAvailable(event, relationName) {
  if (!event) return;
  const id = event.params.data[relationName]?.connect[0].id;
  const data = await strapi.db.query(event.model.uid).findOne({
    where: {
      [relationName]: {
        id: id,
      },
    },
  });
  if (data) {
    return false;
  }
  return true;
}

module.exports = {
  getRelationsUpdateResult,
  isRelationAvailable,
};
