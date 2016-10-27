import Ember from 'ember';

export default Ember.Component.extend({
  inPost: false,
  flipCounter:0,
  didRender(){
    if(this.get("routeName") === "post"){
      this.set("inPost", true)
    } else{
      this.set("inPost", false);
    }
    var rando = Math.random() * 2000;
    console.log(rando);
    var currentThing = this;
    setTimeout(function() {
      $("." + currentThing.post.id).transition('fly left', '2500ms')
    }, rando);
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
  }
});
