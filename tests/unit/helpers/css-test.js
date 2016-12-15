
import { css } from 'dummy/helpers/css';
import { module, test } from 'qunit';

import { StyleSheet } from 'aphrodite-local-styles';

module('Unit | Helper | css');

test('it works', function(assert) {
  const styles = StyleSheet.create({
    red: {
      backgroundColor: 'red'
    }
  });

  let result = css([styles.red]);

  assert.ok(result);
});

