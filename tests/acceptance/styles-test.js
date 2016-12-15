import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | styles');

test('rending with inline css', function(assert) {
  visit('/');

  andThen(function() {
    const redDiv = find('.show-colors-component > div');

    assert.equal(redDiv.css('backgroundColor'), 'rgb(255, 0, 0)');
  });
});
