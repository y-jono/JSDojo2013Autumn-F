Questionnaire.Router.map(function() {
  this.route('new');
  this.route('confirmation');
  this.route('thanks');
});

Questionnaire.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.ajax('/data');
  }
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

Questionnaire.ConfirmationRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('confirmation', {controller: 'application'});
  }
});
