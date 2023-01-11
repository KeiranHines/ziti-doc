/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'html',
      value: 'LEARN', // The HTML to be rendered
      className: 'sidebar-title'
    },
    {
      type: 'autogenerated',
      dirName: 'learn',
    },
    {
      type: 'html',
      value: 'REFERENCE', // The HTML to be rendered
      className: 'sidebar-title'
    },
    {
      type: 'autogenerated',
      dirName: 'reference',
    },
    {
      type: 'html',
      value: 'GUIDES', // The HTML to be rendered
      className: 'sidebar-title'
    },
    {
      type: 'autogenerated',
      dirName: 'guides',
    },
  ],
};

module.exports = sidebars;
