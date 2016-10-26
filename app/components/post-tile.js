import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deletePost(post){
      this.sendAction("deletePost", post);
    },
    editPost(post, params){
      console.log("post-tile");
      this.sendAction("editPost", post, params);
    }
  }
});
