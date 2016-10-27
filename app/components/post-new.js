import Ember from 'ember';

export default Ember.Component.extend({
  inNew: false,
  actions: {
    newPost() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        dateCreated: this.get('dateCreated'),
        imageURL: this.get('imageURL')
      };

      title: this.set('title', '');
      content: this.set('content', '');
      dateCreated: this.set('dateCreated', '');
      imageURL: this.set('imageURL', '');

      this.set("inNew", false);
      this.sendAction('newPost', params);
    },
    goNew(){
      this.set("inNew", true);
    }
  }
});
