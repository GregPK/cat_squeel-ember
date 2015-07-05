import Ember from 'ember';

export default Ember.Mixin.create({
  setupController: function(controller, model) {
    this._super(controller, model);
    if (controller.session.isAuthenticated) {
      $.getJSON("http://localhost:3101/api/v1/current_user").then(function(user) {
        controller.set('currentUser', user);
      });
    }
  }
});
