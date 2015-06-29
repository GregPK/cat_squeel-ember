export default {
  name: "currentUser",

  initialize: function(container, application) {
    application.deferReadiness();
    //container.lookup('store:main').find('user', 1).then(function(user)
    //{
    var user = {name: "Test", email: 'test@example.com'};

    application.register('user:current', user, { instantiate: false, singleton: true });
    application.inject('route', 'currentUser', 'user:current');
    application.inject('controller', 'currentUser', 'user:current');
    application.advanceReadiness();
    //}, function() {
    //  application.advanceReadiness();
    //});
  }
};
