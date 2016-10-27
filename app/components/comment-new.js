import Ember from 'ember';

export default Ember.Component.extend({
  inNew: false,
  actions:{
    goNew(){
      this.set("inNew", true);
    },
    newComment(post){
      var params = {
        userName: this.get('userName'),
        content: this.get('content'),
        dateCreated: this.get('dateCreated'),
        post: this.get('post')
      };
      this.set("inNew", false);
      this.sendAction('newComment', params);
    }
  }
});
