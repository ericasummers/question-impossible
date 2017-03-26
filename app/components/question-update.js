import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionShowing: false,
  actions: {
    showUpdateForm() {
      this.set('updateQuestionShowing', true);
    },
    cancelUpdate() {
      this.set('updateQuestionShowing', false);
    },
    update(question) {
      var params = {
        body: this.get('body'),
        details: this.get('details'),
        author: this.get('author'),
        date: this.get('date')
      };
      this.set('updateQuestionShowing', false);
      this.sendAction('updateQuestion', question, params);
      this.set('body', '');
      this.set('details', '');
      this.set('author', '');
      this.set('date');
    }
  }
});
