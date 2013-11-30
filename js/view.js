Questionnaire.ResultView = Ember.View.extend({
  didInsertElement: function() {
    console.log("hoge");
    var ctx = this.$('#result_q1')[0].getContext('2d');
    new Chart(ctx).Bar({
      labels: ["楽しかった", "楽しくなかった"],
      datasets: [
        {
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
			    data : [65, 22]
        }
      ]
    });
  }
});
