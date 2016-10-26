import Ember from 'ember';

export default Ember.Component.extend({
  inNew: false,
  actions: {
    newPost() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        dateCreated: this.get('dateCreated')
      };
      this.set("inNew", false);
      this.sendAction('newPost', params);
    },
    goNew(){
      this.set("inNew", true);
    }
  }
});
