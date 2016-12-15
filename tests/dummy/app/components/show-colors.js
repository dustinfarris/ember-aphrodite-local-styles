import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { StyleSheet } from 'aphrodite-local-styles';


const { Component } = Ember;


export default Component.extend({
  classNames: ['show-colors-component'],

  layout: hbs`
    <div class={{css styles.red}}>
      This is red
    </div>
  `,

  styles: StyleSheet.create({
    red: {
      backgroundColor: 'red'
    }
  })
});
