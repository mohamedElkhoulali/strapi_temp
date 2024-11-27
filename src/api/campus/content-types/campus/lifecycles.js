"use strict";

const _ = require('lodash');

/**
 * Sorts courses by name first, then by degreeLevel (higher first)
 * @param {Array} courses 
 * @returns {Array} 
 */
function sortCourses(courses) {
  if(!courses || !courses.length) return [];
  let newList =  _.orderBy(courses, item => item.name.toLowerCase(), ['asc']);
  newList = _.orderBy(courses, ['degreeLevel'], ['desc']);
  return newList;
}

module.exports = {
  afterFindOne(result) {
    if (!result.result) return;
    result.result.courses = sortCourses(result.result.courses);
  },
  afterFindMany(result){
    if(!result.result) return;
    result.result.forEach((campus) => {
      campus.courses = sortCourses(campus.courses);
    });
  }
}