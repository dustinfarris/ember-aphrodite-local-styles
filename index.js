/* jshint node: true */
'use strict';

const merge = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-aphrodite-local-styles',

  included(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/aphrodite.umd.js', {
      using: [{ transformation: 'amd', as: 'aphrodite-local-styles' }]
    });
  },

  treeForVendor(tree) {

    const umdDist = path.join(path.dirname(require.resolve('aphrodite/package.json')), 'dist');
    return umdDist;

    if (!tree) {
      return this._super.treeForVendor.call(this, umdDist);
    }

    const trees = merge([tree, umdDist], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees);
  }
};
