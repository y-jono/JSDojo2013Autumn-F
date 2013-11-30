Questionnaire.ApplicationController = Ember.ArrayController.extend({
  isEnjoy: true,
  satisfyPoints: [5, 4, 3, 4, 5],
  selectedSatisfyPoint: 5,
  implession: "",
  enjoyText: function() {
      return this.get('isEnjoy') ? "はい" : "いいえ";
  }.property('isEnjoy'),
  actions: {
    submit: function() {
      this.save();
      this.reset();
      this.transitionToRoute("thanks");
    }
  },
  reset: function() {
    this.set("isEnjoy", true);
    this.set("selectedSatisfyPoint", 5);
    this.set("implession", "");
  },
  save: function() {
    var content = this.get('content');
    var result = this.getProperties("isEnjoy", "selectedSatisfyPoint", "implession")
    content.pushObject(result);

    Ember.$.ajax('/data', {
      type: 'PUT',
      data: {
        data: content
      }
    });
  }
});
