'use strict';

const test = require('tape');

const isSemantic = require('..');

const assert = (selector, expected) => {
  if (isSemantic(selector) !== expected) {
    throw new Error(
      `Expected "${selector}" to be labeled ${expected ? '' : 'non-'}semantic, but it was not.`
    );
  }
};

test('tag names', (t) => {
  [
    'body', 'header', 'footer', 'nav', 'article', 'section'
  ].forEach((selector) => assert(selector, true));

  [
    'div', 'span'
  ].forEach((selector) => assert(selector, false));

  t.end();
});

test('lists', (t) => {
  [
    'body, header, footer', 'nav, article, section'
  ].forEach((selector) => assert(selector, true));

  [
    'div, span', 'body, div', 'span, header', 'nav, div, section'
  ].forEach((selector) => assert(selector, false));

  t.end();
});

test('simple descendents', (t) => {
  [
    'article section', 'article section header'
  ].forEach((selector) => assert(selector, true));

  [
    'div span', 'article span', 'article div header'
  ].forEach((selector) => assert(selector, false));

  t.end();
});

test('IDs', (t) => {
  [
    '#bare',
    'article#on-semantic',
    'div#on-non-semantic'
  ].forEach((selector) => assert(selector, false));

  t.end();
});

test('class names', (t) => {
  [
    '.bare',
    'article.on-semantic',
    'div.on-non-semantic'
  ].forEach((selector) => assert(selector, false));

  t.end();
});

test('attributes', (t) => {
  [
    '[role="button"]',
    '[role=\'button\']',
    '[role=button]',
    '[role="button" i]',
    '[role="button" I]',
    '[role=\'button\' i]',
    '[role=\'button\' I]',
    '[role=button i]',
    '[role=button I]',
    'section[role="dialog"]',
    '[type="date"]',
    '[type="text"]'
  ].forEach((selector) => assert(selector, true));

  [
    '[id]',
    '[id="foo"]',
    '[data-anything]',
    '[data-anything="with value"]',
    '[role]',
    '[role="unknown"]',
    '[role="dialog\']',
    '[role=buttoni]',
    '[role=\'dialog"]',
    'div[role="dialog"]',
    '[type]',
    'div[type="text"]'
  ].forEach((selector) => assert(selector, false));

  t.end();
});
