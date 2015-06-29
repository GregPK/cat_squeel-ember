import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  setupController: function(controller) {
    // `controller` is the instance of ApplicationController
    controller.set('title', "Kociokwik");
  }
});
