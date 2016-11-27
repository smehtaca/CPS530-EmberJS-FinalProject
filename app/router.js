import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('install');
  this.route('tutorial');
  this.route('chat');
  this.route('room');
  this.route('room', { path: '/room/:user_name' } );
  this.route('conclusion');
});

export default Router;
