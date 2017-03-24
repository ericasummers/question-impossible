import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionShowing: false,
  actions: {
    showQuestionForm: function() {
      this.set('addQuestionShowing', true);
    },
    addQuestion: function() {
      this.set('addQuestionShowing', false);
    },
    cancelQuestion: function() {
      this.set('addQuestionShowing', false);
    }
  }
});
