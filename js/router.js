Questionnaire.Router.map(function() {
  this.route('new');
  this.route('confirmation');
  this.route('thanks');
  this.route('result');
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

Questionnaire.NewRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('result', {controller: 'application'});
  }
});
