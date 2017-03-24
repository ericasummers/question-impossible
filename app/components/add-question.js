import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionShowing: false,
  actions: {
    showQuestionForm: function() {
      this.set('addQuestionShowing', true);
    },
    saveQuestion: function() {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        date: this.get('date')
      };
      this.sendAction('saveQuestion', params);
      this.set('addQuestionShowing', false);
      this.set('body', '');
      this.set('author', '');
      this.set('date');
    },
    cancelQuestion: function() {
      this.set('addQuestionShowing', false);
    }
  }
});
