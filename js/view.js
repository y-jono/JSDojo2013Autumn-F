Questionnaire.ResultView = Ember.View.extend({
  didInsertElement: function() {
    var content = this.get("controller.content");
    this.showQ1Result(content);
    this.showQ2Result(content);
  },

  showQ1Result: function(content) {
    // console.log(content);
    // console.log(content.filterBy("isEnjoy", true).length);
    // console.log(content.filterBy("isEnjoy", "true").length);

    var ctx = this.$('#result_q1')[0].getContext('2d'),
        countOfWhoAgreed    = content.filterBy("isEnjoy", "true").length,
        countOfWhoNotAgreed = content.filterBy("isEnjoy", "false").length,

        data = {
          labels: ["楽しかった", "楽しくなかった"],
          datasets: [{
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            data: [countOfWhoAgreed, countOfWhoNotAgreed]
          }]
        },
        option = {
          scaleOverride: true,
          scaleSteps: Math.max(countOfWhoAgreed, countOfWhoNotAgreed),
          scaleStepWidth: 1,
          scaleStartValue: 0
        };
    new Chart(ctx).Bar(data, option);
  },

  showQ2Result: function(content) {
    var ctx = this.$('#result_q2')[0].getContext('2d');
    new Chart(ctx).Pie([
      {value: content.filterBy("selectedSatisfyPoint", "1").length, color:"#f00"},
      {value: content.filterBy("selectedSatisfyPoint", "2").length, color:"#0f0"},
      {value: content.filterBy("selectedSatisfyPoint", "3").length, color:"#00f"},
      {value: content.filterBy("selectedSatisfyPoint", "4").length, color:"#ff0"},
      {value: content.filterBy("selectedSatisfyPoint", "5").length, color:"#0ff"}
    ]);
  }
});
