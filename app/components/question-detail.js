import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm("Are you sure you want to delete this question?")) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
