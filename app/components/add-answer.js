import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerShowing: false,
  actions: {
    showAnswerForm() {
      this.set('addAnswerShowing', true);
    },
    saveAnswer() {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        date: this.get('date'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('addAnswerShowing', false);
      this.set('body', '');
      this.set('author', '');
      this.set('date');
    },
    cancelAnswer() {
      this.set('addAnswerShowing', false);
    }
  }
});
