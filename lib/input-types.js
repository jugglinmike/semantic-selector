'use strict';

/**
 * > The input element represents a typed data field, usually with a form
 * > control to allow the user to edit the data.
 * >
 * > The type attribute controls the data type (and associated control) of the
 * > element.
 *
 * https://html.spec.whatwg.org/multipage/input.html#attr-input-type
 */

module.exports = new Set([
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  //'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
]);
