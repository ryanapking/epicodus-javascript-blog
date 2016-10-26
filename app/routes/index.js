import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("post");
  },

  actions: {
    newPost(params) {
      console.log("top level");
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    deletePost(post){
      post.destroyRecord();
    }
  }
});
