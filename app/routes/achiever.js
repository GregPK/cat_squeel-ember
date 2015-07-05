import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import CurrentUserMixin from 'cat-squeel-ember/mixins/current-user';

export default Ember.Route.extend(AuthenticatedRouteMixin,CurrentUserMixin);
