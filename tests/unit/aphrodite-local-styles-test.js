import { module, test } from 'ember-qunit';

import {
  StyleSheet,
  StyleSheetServer,
  StyleSheetTestUtils,
  css,
  cssGlobal
} from 'aphrodite-local-styles';

module('aphrodite-local-styles', 'Unit | vendor import');

test('it exports StyleSheet', function(assert) {
  assert.ok(StyleSheet);
});

test('it exports StyleSheetServer', function(assert) {
  assert.ok(StyleSheetServer);
});

test('it exports StyleSheetTestUtils', function(assert) {
  assert.ok(StyleSheetTestUtils);
});

test('it exports css', function(assert) {
  assert.ok(css);
});

test('it exports cssGlobal', function(assert) {
  assert.ok(cssGlobal);
});
