import Ember from 'ember';

export default Ember.Route.extend({
  activate(){
    console.log("on");
    // $('#sidebar').sidebar('attach events', '#sidebar');
  }
});
