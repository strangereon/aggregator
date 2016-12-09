import { Template } from 'meteor/templating';
 
import { Aggregators } from '../api/aggregators.js';
 
import './aggregator.html';
 
Template.stream.events({
  'click .investigate'() {
    // Set the checked property to the opposite of its current value
    Aggregators.update(this._id, {
      $set: { investigating: ! this.investigating },
    });
  },
});