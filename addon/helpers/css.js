import Ember from 'ember';

import { css as aphroditeCss } from 'aphrodite-local-styles';

const { Helper: { helper } } = Ember;

export function css(params=[]) {
  console.log('processing');
  console.log(params);
  return aphroditeCss(...params);
}

export default helper(css);
