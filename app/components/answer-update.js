import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerShowing: false,
  actions: {
    showUpdateForm() {
      this.set('updateAnswerShowing', true);
    },
    cancelUpdate() {
      this.set('updateAnswerShowing', false);
    },
    update(answer) {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        date: this.get('date'),
        question: this.get('question')
      };
      this.set('updateAnswerShowing', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
