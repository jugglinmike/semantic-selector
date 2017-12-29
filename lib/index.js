'use strict';
const { parse } = require('css-selector-tokenizer');

const ariaRoles = require('./aria-roles');
const inputTypes = require('./input-types');
const tagNames = require('./elements');

function isValidSelector(node) {
  if (node.type === 'element') {
    return tagNames.has(node.name);
  }
  if (node.type === 'spacing') {
    return true;
  }
  if (node.type === 'attribute') {
    const match = node.content.match(/^([^=]+)(?:=(["']?)([^"']*)\2)?$/);

    if (match) {
      if (match[1] === 'role') {
        return ariaRoles.has(match[3]);
      }

      if (match[1] === 'type') {
        return inputTypes.has(match[3]);
      }
    }
  }

  return false;
}

module.exports = function(selector) {
  return parse(selector).nodes.every((node) => {
    return node.nodes.every(isValidSelector);
  });
};
