'use strict';
// https://www.w3.org/TR/wai-aria-1.1/

module.exports = new Set([
  /**
   * > ## 5.3.1 Abstract Roles
   * >
   * > The following roles are used to support the WAI-ARIA role taxonomy for
   * > the purpose of defining general role concepts.
   * >
   * > Abstract roles are used for the ontology. Authors MUST NOT use abstract
   * > roles in content.
   */
  //'command',
  //'composite',
  //'input',
  //'landmark',
  //'range',
  //'roletype',
  //'section',
  //'sectionhead',
  //'select',
  //'structure',
  //'widget',
  //'window',

  /**
   * > ## 5.3.2 Widget Roles
   * >
   * > The following roles act as standalone user interface widgets or as part
   * > of larger, composite widgets.
   */
  'button',
  'checkbox',
  'gridcell',
  'link',
  'menuitem',
  'menuitemcheckbox',
  'menuitemradio',
  'option',
  'progressbar',
  'radio',
  'scrollbar',
  'searchbox',
  'separator', // (when focusable)
  'slider',
  'spinbutton',
  'switch',
  'tab',
  'tabpanel',
  'textbox',
  'treeitem',
  /**
   * > The following roles act as composite user interface widgets. These
   * > roles typically act as containers that manage other, contained widgets.
   */
  'combobox',
  'grid',
  'listbox',
  'menu',
  'menubar',
  'radiogroup',
  'tablist',
  'tree',
  'treegrid',

  /**
   * > ## 5.3.3 Document Structure
   * >
   * > The following roles describe structures that organize content in a
   * > page. Document structures are not usually interactive.
   */
  'application',
  'article',
  'cell',
  'columnheader',
  'definition',
  'directory',
  'document',
  'feed',
  'figure',
  'group',
  'heading',
  'img',
  'list',
  'listitem',
  'math',
  'none',
  'note',
  'presentation',
  'row',
  'rowgroup',
  'rowheader',
  'separator', // (when not focusable)
  'table',
  'term',
  'toolbar',
  'tooltip',

  /**
   * > ## 5.3.4 Landmark Roles
   * >
   * > The following roles are regions of the page intended as navigational
   * > landmarks. All of these roles inherit from the landmark base type and
   * > all are imported from the Role Attribute [role-attribute]. The roles
   * > are included here in order to make them clearly part of the WAI-ARIA
   * > Role taxonomy.
   */
  'banner',
  'complementary',
  'contentinfo',
  'form',
  'main',
  'navigation',
  'region',
  'search',

  /**
   * > ## 5.3.5 Live Region Roles
   * >
   * > The following roles are live regions and may be modified by live
   * > region attributes.
   */
  'alert',
  'log',
  'marquee',
  'status',
  'timer',

  /**
   * > ## 5.3.6 Window Roles
   * >
   * > The following roles act as windows within the browser or application.
   */
  'alertdialog',
  'dialog',
]);
