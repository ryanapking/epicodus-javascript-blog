import Ember from 'ember';

export default Ember.Component.extend({
  inPost: false,
  didRender(){
    if(this.get("routeName") === "post"){
      this.set("inPost", true)
    } else{
      this.set("inPost", false);
    }
    console.log(this.inPost);
  },
  actions:{
    deletePost(post){
      this.sendAction("deletePost", post);
    },
    editPost(post, params){
      this.sendAction("editPost", post, params);
    },
    newComment(params){
      this.sendAction("newComment", params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    testFunc(routeName){
      console.log(routeName);
    }
  }
});
