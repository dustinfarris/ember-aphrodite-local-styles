/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-aphrodite-local-styles',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'aphrodite-local-styles', target: '^0.6.2' }
    ]);
  }
};
