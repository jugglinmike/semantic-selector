'use strict';
const { parse } = require('css-selector-tokenizer');

const ariaRoles = require('./aria-roles');
const tagNames = new Set(
  ['body', 'header', 'footer', 'nav', 'article', 'section']
);

function isValidSelector(node) {
  if (node.type === 'element') {
    return tagNames.has(node.name);
  }
  if (node.type === 'spacing') {
    return true;
  }
  if (node.type === 'attribute') {
    const match = node.content.match(/^([^=]+)(?:=["'](.*)["'])?$/);
    if (match && match[1] === 'role') {
      return ariaRoles.has(match[2]);
    }
  }

  return false;
}

module.exports = function(selector) {
  return parse(selector).nodes.every((node) => {
    return node.nodes.every(isValidSelector);
  });
};
