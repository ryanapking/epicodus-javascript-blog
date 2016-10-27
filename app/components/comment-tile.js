import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    newComment(params){
      this.sendAction("newComment", params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
