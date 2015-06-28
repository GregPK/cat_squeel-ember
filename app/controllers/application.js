export default Ember.Controller.extend({
  appName: 'Cat Squeel',

  actions: {
    authenticate: function () {
      debugger;
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:devise', data);
    }
  }
});
