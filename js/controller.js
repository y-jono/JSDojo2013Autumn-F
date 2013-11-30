Questionnaire.ApplicationController = Ember.ObjectController.extend({
  isEnjoy: true,
  satisfyPoints: [5, 4, 3, 4, 5],
  selectedSatisfyPoint: 5,
  implession: "",
  enjoyText: function() {
      return this.get('isEnjoy') ? "はい" : "いいえ";
  }.property('isEnjoy'),
  result: [],
  actions: {
    submit: function() {
      var result = this.get('result');
      result.pushObject(this.getProperties("isEnjoy", "selectedSatisfyPoint", "implession"));
      this.reset();
      this.transitionToRoute("thanks");
    }
  },
  reset: function() {
    this.set("isEnjoy", true);
    this.set("selectedSatisfyPoint", 5);
    this.set("implession", "");
  }
});
