import Ember from 'ember';

const {
  Component,
  Logger
} = Ember;

export default Component.extend({
  hasAction: function() {
    return (this.get('type').toLowerCase() === 'action');
  }.property('data'),
});
