# ember-aphrodite-local-styles

[![CircleCI](https://circleci.com/gh/dustinfarris/ember-aphrodite-local-styles.svg?style=svg)](https://circleci.com/gh/dustinfarris/ember-aphrodite-local-styles)

Use @mattkrick's fork of [aphrodite](https://github.com/mattkrick/aphrodite) in your Ember application.


## Installation

```
ember install ember-aphrodite-local-styles
```


## Usage

```js
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { StyleSheet } from 'aphrodite-local-styles';

export default Ember.Component.extend({

  styles: StyleSheet.create({
    red: {
      backgroundColor: 'red'
    },
    blue: {
      backgroundColor: 'blue'
    }
  }),

  layout: hbs`
    <div class={{css styles.red}}>
      This is red
    </div>
    <div class={{css styles.blue}}>
      This is blue
    </div>
  `
});
```


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
