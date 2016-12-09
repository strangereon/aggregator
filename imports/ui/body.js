import { Template } from 'meteor/templating';

import { Aggregators } from '../api/aggregators.js';
 
import './aggregator.js';
import './body.html';

Template.body.helpers({
  all_aggregators() {
  	return Aggregators.find({});
  },
  red_aggregators_open() {
  	//console.log(Aggregators.find( { streams: { $all: [
  	//	{ "$elemMatch" : {status: 'rag-red'} }
  	//	] } }) );
	return Aggregators.find( { streams: { $all: [
  		{ "$elemMatch" : {status: 'rag-red'} }
  		] } });  	
  },
  amber_aggregators_open() {
	return Aggregators.find({streams: { 'status': 'rag-amber', 'investigating': false} });  	
  },
  red_aggregators_investigating() {
	return Aggregators.find({streams: { 'status': 'rag-red', 'investigating': true} });  	
  },
  amber_aggregators_investigating() {
	return Aggregators.find({streams: { 'status': 'rag-amber', 'investigating': true} });  	
  },
});