Questionnaire.Router.map(function() {
  this.route('new');
  this.route('confirmation');
});

Questionnaire.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('new');
  }
});

Questionnaire.NewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('new', {controller: 'application'});
  }
});
