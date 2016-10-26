import Ember from 'ember';

export default Ember.Component.extend({
  inEdit: false,
  actions:{
    goEdit(){
      this.set("inEdit", true)
    },
    editPost(post){
      var params = {
        title: this.get('post.title'),
        content: this.get('post.content'),
        dateCreated: this.get('dateCreated')
      };
      this.set('inEdit', false);
      this.sendAction('editPost', post, params);
    }
  }
});
