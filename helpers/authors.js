"use strict";

// authorObject = {label: "Author Name", href: "Link to author page"}

var _         = require("lodash");
var andAndAnd = require("./andAndAnd");

function getLabel(authorObject) {
  return authorObject.label;
}


// [authorObjects] -> closure
function authors(authorObjects) {
  var _auths = authorObjects;

  return {
    toString : function() {
      return andAndAnd(_.map(_auths, getLabel));
    }
  };
}

module.exports = authors;
