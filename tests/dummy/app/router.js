import Ember from 'ember';
import config from './config/environment';
const { Router: ERouter } = Ember;

const Router = ERouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    // GETTING STARTED
    // index.hbs is "Overview"
    this.route('installation');
    this.route('container');
    this.route('adding-layers');
    this.route('actions');
    this.route('templates');
    this.route('contextual-components');

    // COMPONENTS
    this.route('component', { path: ':component_name' });

    // HELPERS
    this.route('helper', { path: 'helpers/:helper_name' });
  });

  this.route('addons');
});

export default Router;
