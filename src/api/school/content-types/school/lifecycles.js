"use strict";
const _ = require('lodash');

function sortCampuses(campuses) {
  return _.orderBy(campuses, item => item.label?.toLowerCase(), ['asc']);
}

function sortCourses(courses) {
  courses = _.orderBy(courses, item => item.name?.toLowerCase(), ['asc']);
  courses = _.orderBy(courses, ['degreeLevel'], ['desc']);
  return courses;
}

module.exports = {
  afterFindOne(event){
    if(event.result?.campuses?.length) {
      // we may need to use campuses2 instead, we'll see after controllers implementation
      event.result.campuses = sortCampuses(event.result.campuses);
    }
    if(event.result?.courses?.length) {
      event.result.courses = sortCourses(event.result.courses);
    }
  },
  afterFindMany(event){
    if(!event.result) return;
    event.result.forEach((item) => {
      item.campuses = sortCampuses(item.campuses);
      item.courses = sortCourses(item.courses);
    });    
  }
}